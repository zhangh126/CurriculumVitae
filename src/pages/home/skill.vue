<template>
	<div class="skill">
		<div class="skill-left">
			<div class="skill-left-top">
				<img src="../../assets/img/QQ图片20190907201504.png" alt="">
			</div>
			<div class="skill-left-bottom">
				<span>个人技能</span>
			</div>
		</div>
		<div class="skill-right">
			<div class="skill-right-item">
				<div class="skill-right-item-left">
					<skill-echarts :getecharts="weekendList"></skill-echarts>
				</div>
				<div class="skill-right-item-right">
					<div class="skill-right-item-right-list">
						<div class="item-right-text" v-for="(item,index) of skill">
							<span>{{item.id}}、</span>
							<span>{{item.title}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SkillEcharts from '../../components/echarts/index.vue'
	export default {
		name: 'Skill',
		components: {
			SkillEcharts
		},
		props:{
			skill:{
				type:Array,
				default:[]
			},
			weekendList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style scoped>
	.skill {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		margin: 10px 0;
	}

	.skill-left {
		width: 30%;
		border: 1px solid #CCCCCC;
		height: 400px;
		text-align: center;
		position: relative;
	}

	.skill-left-top {
		position: absolute;
		width: 240px;
		height: 300px;
		top: 50%;
		left: 50%;
		margin-top: -150px;
		margin-left: -120px;
	}

	.skill-left-top img {
		width: 100%;
		height: 100%;
	}

	.skill-left-bottom {
		position: absolute;
		color: #000;
		font-size: 28px;
		margin-top: 70%;
		margin-left: 36%;
	}

	.skill-right {
		flex: 1;
		height: 400px;
	}

	.skill-right-item {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.skill-right-item-right {
		flex: 1;
	}
	.item-right-text {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.item-right-text span {
		display: block;
		width: 100%;
		line-height: 20px;
	}
	.item-right-text span:nth-child(2) {
		margin-left: 10px;
	}
</style>
