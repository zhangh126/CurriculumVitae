<template>
	<div class="skill">
		<div class="skill-left">
			<div class="skill-left-top">
				<img src="../../assets/img/QQ图片20190907201504.png" alt="">
			</div>
			<div class="skill-left-bottom">
				<span>项目经验</span>
			</div>
		</div>
		<div class="skill-right">
			<div class="skill-right-item">

				<swiper :options="swiperOption" class="swipers">
					<swiper-slide>
						<div class="item-right-text">
							<span>一、项目名称:Vue-app</span>
							<span></span>
							<span>二、框架:vue框架</span>
							<span></span>
							<span>三、开发工具:Sublime Text3在node环境下运行，或者WebStorm 编辑器</span>
							<span></span>
							<span>四、项目简介:</span>
							<span>手机端的商城网页，运用组件化的思想，将页面内容划分为一个个的组件。项目开发完成后
使用webpack进行项目打包，生成最终可以发布的项目。</span>
							<span>五、技术点</span>
							<span>
								1.通过css3实现页面动画效果<br>
								2.利用jsonp跨域请求数据模拟真实开发场景 <br>
								3.实现每个组件的按需加载，图片懒加载。<br>
								4.对从接口获取的数据通过localStorage进行本地存储，利用节流函数阻止搜索框的多次发送事件。从而提高网页的性能 <br>
								5.首页具有的上拉刷新与下拉加载功能，幻灯片与滚动条组件使用的是swiper插件来实现的 <br>
								6.使用webpack进行项目打包，生成最终可以发布的项目 <br>
							</span>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="item-right-text">
							<span>一、项目名称:Vue-app</span>
							<span></span>
							<span>二、框架:vue框架</span>
							<span></span>
							<span>三、开发工具:HBuilderX</span>
							<span></span>
							<span>四、项目简介:</span>
							<span>基于Vue框架完成的一个APP，参考了去哪儿网布局。首页具有多区域轮播功能，多区域列表的循环展示。城市选择页面主要写了城市展示页面、城市的搜索功能以及城市右侧字母与左侧区块动画联动效果，还有列表的详情页面等功能。</span>
							<span>五、技术点</span>
							<span>
								1.利用axios获取本地模拟的ajax数据，使用vue-router做多页面之间的路由。<br>
								2.使用vuex做各个组件数据的共享 <br>
								3.利用了递归组件做了详情页面的多级列表 <br>
								4.整个项目使用了各种插件，幻灯片组件与详情页面的图片展示利用了swiper插件,列表的滑动使用了better-scroll插件 <br>
								5.利用localStorage实现页面数据的本地储存，使用keep-alive优化路由页面性能 <br>
								6.页面的动画效果封装成一个公共的组件，需要动画效果的页面直接调用。充分利用组件化思想开发整个项目 <br>
						    </span>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="item-right-text">
							<span>一、项目名称:E68模具APP</span>
							<span></span>
							<span>二、框架:vue框架</span>
							<span></span>
							<span>三、开发工具:Visual Studio Code</span>
							<span></span>
							<span>四、项目简介:</span>
							<span>模具行业ERP系统的移动端应用，主要展示模具管理的各个流程、随时查看工厂的实时加工效率与生产进度。做到手机端也能完成对模具各个流程的管控，提高生产效率。</span>
							<span>五、责任模块:</span>
							<span>主要负责对PC端系统的各个模块进行移动端的改写做到PC端与移动端连通，手机端操作的数据PC端要能实时同步。采用的是vue框架、钉钉微应用UI组件库对移动端进行开发，与后端对接数据渲染至页面</span>
							<span>六、技术点</span>
							<span>
								1.各种图形插件完成数据动态化图表化，使数据更加清晰明了，直观。<br />
								2.页面高级搜索使用原生封装组件，复用性较大的功能，都会封装为一个独立的组件方便调用。<br />
								3.主要实现页面的增删改查，与后端数据进行联动<br />
								4.使用vuex做各个组件数据的共享<br />
								5.利用jsonp跨域请求后端数据，实现页面数据的加载。<br />
								6.对从接口获取的数据通过localStorage进行本地存储，利用节流函数阻止搜索框的多次发送事件。从而提高网页的性能
								<br />
								7.通过CSS3实现页面的动画效果</span>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="item-right-text">
							<span>一、项目名称:模思软件官网</span>
							<span></span>
							<span>二、开发工具:Visual Studio Code</span>
							<span></span>
							<span>三、项目简介:</span>
							<span>主要是针对公司官网的二次开发、新增功能与界面优化</span>
							<span>四、技术点</span>
							<span>
								1.利用html5、css3完成新功能页面的布局 <br>
								2.利用ajax获取后端数据 <br>
								3.页面性能的优化，代码的封装 <br>
								项目链接:http://www.moldsee.com/about.html
							</span>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Skill',
		data() {
			return {
				swiperOption: {
					watchOverflow: true,
					// Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
					direction: 'horizontal',
					// 自动切换时间
					
					// 设置slider容器能够同时显示的slides数量(carousel模式)。
					slidesPerView: 1,
					// 循环播放
					loop:true,
					// 原点
					pagination: {
					  el: true ? '.swiper-pagination' : null
					}
					
				}
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
		align-items: center;
		/* background: #E5E5E5; */
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
		width: 70%;
		height: 400px;
	}

	.skill-right-item {
		width: 100%;
		height: 100%;
	}



	.item-right-text {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		height: 100px;
		margin: 30px 50px;
		font-size: 14px;
	}

	.item-right-text span:nth-child(odd) {
		display: block;
		width: 100%;
		line-height: 20px;
	}

	.item-right-text span:nth-child(even) {
		margin-left: 73px;
		line-height: 20px;
	}
	.swiper-container{
		width: 100%;
		height: 100%;
	}
</style>
