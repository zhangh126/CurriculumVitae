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
						<div class="item-right-text">
							<span>1.</span>
							<span>2017年下半年在广东南方数码科技股份有限公司长沙分公司长沙不动产项目驻场实施实习，主要负责公司部门日常工作，整理需求文档。负责系统后期的维护，为客户在系统上提供技术支持。实时了解客户的需求撰写新功能需求文档提供给产品经理</span>
						</div>
						<div class="item-right-text">
							<span>2.</span>
							<span>2018.3-2019.8就职于中山模思软件岗位是前端开发主要负责公司产品的移动端开发。采用的是vue框架、钉钉微应用UI组件库对公司产品进行组件化、模块化开发。负责公司网站后续迭代维护，二次开发 </span>
						</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Skill',
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
		background: #E5E5E5;
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
