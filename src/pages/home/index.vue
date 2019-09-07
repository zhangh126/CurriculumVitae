<template>
	<div>
		<home-header></home-header>
		<home-information></home-information>
	</div>
</template>

<script>
	import HomeHeader from './header'
	import HomeInformation from './information'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeInformation
		}
	}
</script>

