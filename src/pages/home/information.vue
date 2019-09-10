<template>
	<div class="item">
		<div class="item-title">
			基本信息
		</div>
		<div class="item-title-list">
			<div class="item-name"><span class="iconfont">&#xe618;</span>姓名：张欢</div>
			<div class="item-age"><span class="iconfont">&#xe713;</span>年龄：21</div>
			<div class="item-phone"><span class="iconfont">&#xe602;</span>联系电话：18285613445</div>
			<div class="item-school"><span class="iconfont">&#xe601;</span>毕业院校：襄阳职业技术学院</div>
			<div class="item-email"><span class="iconfont">&#xe67a;</span>邮箱：Zhang1208h@163.com</div>
			<div class="item-nativeplace"><span class="iconfont">&#xe6a9;</span>籍贯：贵州省铜仁市</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'information'
	}
</script>

<style scoped>
	.item{
		width: 100%;
		height: 100%;
	}
	.item-title{
		width: 100%;
		line-height: 55px;
		padding: 0 10px;
		background: #E5E5E5;
		font-size: 20px;
		text-align: center;
	}
	.item-title-list{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		background: #1577b9;
	}
	.item-title-list div{
		width: 49%;
		line-height: 30px;
		text-align: center;
		border-radius: 5px;
		margin: 15px 5px;
		color: #fff;
	}
	.item-title-list div span{
		margin-right: 3px;
	}
	
	
</style>
