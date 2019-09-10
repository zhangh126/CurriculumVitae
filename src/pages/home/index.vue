<template>
	<div>
		<home-header></home-header>
		<home-information></home-information>
		<home-skill :skill="skill" :weekendList="weekendList"></home-skill>
		<home-workex :workex="workex"></home-workex>
		<home-projectex></home-projectex>
		<home-evaluation></home-evaluation>
	</div>
</template>

<script>
	import { gethomedata } from '../../httpapi/index.js'
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
		},
		data() {
			return {
				skill:[],
				workex:[],
				weekendList:[]
			}
		},
		created() {
			this.gethomedatas()
		},
		methods:{
			gethomedatas(){
				gethomedata().then(data =>{
					console.log(data)
					this.skill=data.texts
					this.workex=data.workexperience
					this.weekendList=data.weekendList
				})
			}
		}
	}
</script>

