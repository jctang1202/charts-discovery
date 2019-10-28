import Vue from 'vue'
import { configure } from '@storybook/vue';

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markLine'


Vue.component('e-charts', ECharts);


function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories');
}

configure(loadStories, module);