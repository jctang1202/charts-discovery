import {storiesOf} from '@storybook/vue'

storiesOf('ECharts Pie', module)
    .add("起步", () => ({
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        selected: ['直接访问']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            // radius: ['80%', '60%'], // 就是大圆减去一个空白的小圆
                            radius: '80%',
                            center: ['50%', '50%'], // 圆心位置
                            // roseType: "radius", // 南丁格尔图
                            avoidLabelOverlap: false,
                            color: [], // 不同颜色色组
                            label: { // 标签
                                normal: { // 正常状态
                                    show: true,
                                    position: 'right'
                                },
                                emphasis: { // Hover状态
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: { // 标签的视觉引导线样式
                                normal: {
                                    lineStyle: {
                                        color: 'red'
                                    }
                                }
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            data: [ // 顺时针
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                }
            }
        },
        template: `
        <e-charts :options='option' width='500' height='300'></e-charts>
`
    }))


storiesOf("Antv Pie", module)
