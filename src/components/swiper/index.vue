<template>
		<swiper :options="swiperOption" class="swipers" v-if="List.length">
		    <!-- slides -->
		    <swiper-slide v-for="(item,index) of List" :key="index">
				<img :src="item.imgUrl" alt="">
			</swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	
</template>

<script>
	export default {
		name:'Swipers',
		props: {
		  direction: {
		    type: String,
		    default: 'horizontal',
		    validator(value) {
		      return [
		        'horizontal',
		        'vertical'
		      ].indexOf(value) > -1;
		    }
		  },
		  interval: {
		    type: Number,
		    default: 3000,
		    validator(value) {
		      return value >= 0;
		    }
		  },
		  loop: {
		    type: Boolean,
		    default: true
		  },
		  pagination: {
		    type: Boolean,
		    default: true
		  }
		},
		data () {
			return {
				List:[{
					    "id": "0001",
					    "imgUrl": require('assets/img/1.jpg')
					  },{
					    "id": "0002",
					    "imgUrl": require('assets/img/2.jpg')
					  },{
					    "id": "0003",
					    "imgUrl": require('assets/img/3.jpg')
					  },{
					    "id": "0004",
					    "imgUrl": require('assets/img/4.jpg')
					  }],
				swiperOption:{
					// 如果数据只有一条失去滑动效果
					watchOverflow: true,
					// Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
					direction: this.direction,
					// 自动切换时间
					autoplay: this.interval ? {
					  delay: this.interval,
					  // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
					  disableOnInteraction: false
					} : false,
					// 设置slider容器能够同时显示的slides数量(carousel模式)。
					slidesPerView: 1,
					// 循环播放
					loop:this.loop,
					// 原点
					pagination: {
					  el: '.swiper-pagination'
					}
				}
			}
		}
	}
</script>

<style scoped>
	.swipers img{
		width: 100%;
		height: 270px;
	}
</style>
