<template>
	<div>
		<home-header></home-header>
		<home-information></home-information>
		<home-skill></home-skill>
		<home-workex></home-workex>
		<home-projectex></home-projectex>
		<home-evaluation></home-evaluation>
	</div>
</template>

<script>
	import HomeHeader from './header'
	import HomeInformation from './information'
	import HomeSkill from './skill'
	import HomeWorkex from './workexperience'
	import HomeProjectex from './projectexperience'
	import HomeEvaluation from './evaluation'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeInformation,
			HomeSkill,
			HomeWorkex,
			HomeProjectex,
			HomeEvaluation
		}
	}
</script>

