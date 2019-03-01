<template>
	<div>
		<ul class="sialist">
			<li v-for="data in piclist" >
				<div v-for="data in data.adv">
					<img  :src="data.pic">
				</div>
			</li>
		</ul>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			piclist:Array,
			

		}
	}
</script>
<style type="text/css" media="screen" lang="scss" scoped>
.sialist{
	width:100%;
	li{
		width:100%;
		display:flex;
		div{
			flex:1;
			img{
				width:100%
			}
		}
		
	}
}

</style>