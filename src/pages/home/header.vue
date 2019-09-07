<template>
	<div class="header">
		<header-swiper
		  :direction="direction"
		  :interval="interval"
		  :loop="loop"
		  :pagination="pagination"
		  :List="List"
		></header-swiper>
	</div>
</template>

<script>
	import axios from 'axios'
	import HeaderSwiper from '../../components/swiper/index.vue'
	export default {
		name:'Header',
		components:{
			HeaderSwiper
		},
		data () {
			return {
				// Slides的滑动方向，可设置水平(horizontal)或垂直(vertical
				direction:'horizontal',
				// 切换时间
				interval:2000,
				// 自动轮播
				loop:true,
				// 小圆点
				pagination:true,
				// 数据
				List:[]
			}
		},
		methods:{
			getHeader(){
				axios.get('api/index.json').then(this.getswiper)
			},
			getswiper(res){
				this.List=res.data.data.swiperList
				console.log(res.data.data.swiperList)
			}
		},
		created() {
			this.getHeader()
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 100%;
	}
</style>
