<template>
	<div class="evaluation">
		<div class="evaluation-left">
			<div class="evaluation-item">自我评价</div>
			<div class="evaluation-list">1. 具有较强的沟通协调能力、抗压能力、责任心和良好的职业操守。具有很强的团队精神。
			</div>
			<div class="evaluation-list">2. 闲暇时间关注前端开发新技术新动向、有时间会使用官方文档来学习前端知识遇到新技术会边学习边写Demo。</div>
			<div class="evaluation-list">3. 你向往的东西正是你努力的意义</div>
		</div>
		<div class="evaluation-right">
			<span><img src="../../assets/img/IMG_20190909_142043.jpg" alt=""></span>
			<span><img src="../../assets/img/IMG_20190909_142143.jpg" alt=""></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'evaluation'
	}
</script>

<style scoped>
	.evaluation{
		width: 100%;
		height: 100%;
		background: #000000;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.evaluation-left{
		width: 40%;
		height: 300px;
		margin: 50px 0 0 50px;
		color: #fff;
	}
	.evaluation-item{
		font-size: 30px;
		text-align: center;
	}
	.evaluation-list{
		line-height: 30px;
	}
	.evaluation-right{
		width: 60%;
	}
	.evaluation-right span {
		display: inline-block;
		width: 220px;
		height: 210px;
		margin: 0px 77px;
	}
	.evaluation-right span img {
		width: 100%;
		height: 100%;
	}
</style>
