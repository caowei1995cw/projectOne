<template>
	<div v-if="datalist" class="foodPic" id="detail">	
		<div v-html="datalist" >	
					
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			datalist:{}
		}
	}
</script>
<style lang="scss" >
	.foodPic img{
	 	width: 100%;	 
	}
</style>