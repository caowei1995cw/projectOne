<template>
	<div class="list">
		<search></search>
		<sidebar></sidebar>
	</div>
</template>
<script>
	import search from './search.vue'
	import sidebar from './sidebar.vue'
	
	export default{
		components:{
			search,
			sidebar
		}
	}
</script>
<style type="text/css" media="screen" scoped>
	.list{
		background-color: white;
	}
</style>