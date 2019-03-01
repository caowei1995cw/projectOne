<template>
  <div id="app">
    <div v-show="this.$store.state.isShow">
      <router-view/>
     <footbar v-if="$route.meta.footbarShow"></footbar>
    </div>
    <div v-show="!this.$store.state.isShow">
      <find></find>
    </div>
  </div>
</template>

<script>
import footbar from './components/Food/footbar.vue'
import find from "./pages/Home/find.vue"
export default {
	components:{
		footbar,
     find
	}

}
</script>

<style lang="scss">
  #app{
    height: 100%;
    widows: 100%;
    background-color: #f0f0f0;
    
  }

</style>
