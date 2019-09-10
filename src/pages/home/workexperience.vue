<template>
	<div class="skill">
		<div class="skill-left">
			<div class="skill-left-top">
				<img src="../../assets/img/QQ图片20190907201504.png" alt="">
			</div>
			<div class="skill-left-bottom">
				<span>工作经历</span>
			</div>
		</div>
		<div class="skill-right">
			<div class="skill-right-item">
						<div class="item-right-text" v-for="(item,index) of workex" :key="index">
							<span>{{item.id}}</span>
							<span>{{item.title}}</span>
						</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Skill',
		props:{
			workex:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style scoped>
	.skill{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		margin:10px 0;
	}
	.skill-left{
		width: 30%;
		border: 1px solid #CCCCCC;
		height: 400px;
		text-align: center;
		position: relative;
	}
	.skill-left-top{
		position: absolute;
		width: 240px;
		height: 300px;
		top: 50%;
		left: 50%;
		margin-top: -150px;
		margin-left: -120px;
	}
	.skill-left-top img{
		width: 100%;
		height: 100%;
	}
	.skill-left-bottom{
		position: absolute;
		    color: #000;
		    font-size: 28px;
		    margin-top: 70%;
		    margin-left: 36%;
	}
	.skill-right{
		flex: 1;
		height: 400px;
	}
	.skill-right-item{
		width: 100%;
		height: 100%;
	}
	.item-right-text{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		height: 100px;
		margin: 30px 50px;
		font-size: 20px;
	}
	.item-right-text span {
		display: block;
		width: 100%;
		
	}
	.item-right-text span:nth-child(2){
		margin-left: 10px;
		
		line-height: 32px;
	}
</style>
