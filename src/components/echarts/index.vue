<template>
	<div class="echarts">
		<div id="myChart" :style="{width: '380px', height: '400px'}"></div>
	</div>
</template>

<script>
	import { gethomedata } from '../../httpapi/index.js'
	export default {
	  name: 'Echarts',
	  mounted(){
	    this.drawLine();
	  },
	  data() {
		  return{
			  getecharts:[],
			  datas:['HTML','CSS','HTML5','CSS3','JavaScript','Vue']
		  }
	  },
	  methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 绘制图表
	        myChart.setOption({
	             title : {
	                    text: '',
	                    subtext: '',
	                    x:'center'
	                },
	                tooltip : {
	                    trigger: 'item',
	                    formatter: "{a} <br/>{b} : {c} ({d}%)"
	                },
	                legend: {
	                    orient: 'vertical',
	                    left: 'left',
	                    data: this.datas
	                },
	                series : [
	                    {
	                        name: '掌握情况',
	                        type: 'pie',
	                        radius : '55%',
	                        center: ['50%', '60%'],
	                        data:[
								{value:500,name:'HTML'},
								{value:600,name:'CSS'},
								{value:400,name:'HTML5'},
								{value:500,name:'CSS3'},
								{value:700,name:'JavaScript'},
								{value:800,name:'Vue'}
							],
	                        itemStyle: {
	                            emphasis: {
	                                shadowBlur: 10,
	                                shadowOffsetX: 0,
	                                shadowColor: 'rgba(0, 0, 0, 0.5)'
	                            }
	                        }
	                    }
	                ]
	        });
	    }
	  }
	}
</script>

<style>
</style>
