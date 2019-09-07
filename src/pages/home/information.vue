<template>
	<div class="item">
		<div class="item-title">
			基本信息
		</div>
		<div class="item-title-list">
			<div class="item-name">姓名：张欢</div>
			<div class="item-age">年龄：21</div>
			<div class="item-phone">联系电话：18285613445</div>
			<div class="item-school">毕业院校：襄阳职业技术学院</div>
			<div class="item-email">邮箱：Zhang1208h@163.com</div>
			<div class="item-nativeplace">籍贯：贵州省铜仁市</div>
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
/* 	.item-title:after{
		content: '';
		border: 1px solid #fff;
		display: inline-block;
		width: 45%;
		margin-right: 10px;
	}
	.item-title:before{
		content: '';
		border: 1px solid #fff;
		display: inline-block;
		width: 45%;
		margin-left: 10px;
	} */
	.item-title-list{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.item-title-list div{
		width: 30%;
		line-height: 30px;
		text-align: center;
		border-radius: 5px;
		border: 1px solid red;
		margin: 15px 5px;
		color: #fff;
	}
	.item-phone,
	.item-email,
	.item-name{
		background: #0000FE;
		
	}
	.item-nativeplace,
	.item-school,
	.item-age{
		background: red;
	}
	
</style>
