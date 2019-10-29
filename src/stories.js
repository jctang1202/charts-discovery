import {storiesOf} from '@storybook/vue'

storiesOf('ECharts Pie', module)
    .add("饼图", () => ({
        data() {
            return {
                option: {
                    visualMap: {
                        // 不显示 visualMap 组件，只用于明暗度的映射
                        show: true,
                        // 映射的最小值为 80
                        min: 1,
                        // 映射的最大值为 600
                        max: 2000,
                        inRange: { //  定义 在选中范围中 的视觉元素。
                            // 明暗度的范围是 0 到 1， 0：暗 1：明
                            colorLightness: [0, 1]
                        },
                        controller: { // 映射控件自己
                            inRange: {
                                symbolSize: [90, 100]
                            }
                        }
                    },
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
                            // roseType: "radius", // 南丁格尔图： angle area radius
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
        template: `<e-charts :options='option' width='500' height='300'></e-charts>`
    }))
    .add("Tooltip 自定义", () => ({
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: 'item', // item axis none
                        // formatter: "{b}:{c}"
                        // eslint-disable-next-line no-unused-vars
                        formatter(params, ticket, callback) {
                            setTimeout(() => {
                                callback(ticket, `<p>${JSON.stringify(params.data)}</p>`)
                            }, 0);
                            return "..."
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        selected: ['直接访问']
                    },
                    series: [
                        {
                            name: '访问来源', // 系列名称
                            type: 'pie',
                            // radius: ['80%', '60%'], // 就是大圆减去一个空白的小圆
                            radius: '80%',
                            center: ['50%', '50%'], // 圆心位置
                            // roseType: "radius", // 南丁格尔图： angle area radius
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
        template: `<e-charts :options='option' width='500' height='300'></e-charts>`
    }));


storiesOf("Antv Pie", module)
