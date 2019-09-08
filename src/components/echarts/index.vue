<template>
	<div class="echarts">
		<div id="myChart" :style="{width: '400px', height: '400px'}"></div>
	</div>
</template>

<script>
	export default {
	  name: 'Echarts',
	  mounted(){
	    this.drawLine();
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
	                    data: ['HTML','CSS','HTML5','CSS3','javaScript','Vue']
	                },
	                series : [
	                    {
	                        name: '掌握情况',
	                        type: 'pie',
	                        radius : '55%',
	                        center: ['50%', '60%'],
	                        data:[
	                            {value:300, name:'HTML'},
	                            {value:300, name:'CSS'},
	                            {value:140, name:'HTML5'},
	                            {value:160, name:'CSS3'},
	                            {value:250, name:'javaScript'},
								{value:300,name:'Vue'}
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
