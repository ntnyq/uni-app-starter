<script lang="ts" setup>
import { PieChart } from 'echarts/charts'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { provideEcharts } from 'uni-echarts/shared'
import type { PieSeriesOption } from 'echarts/charts'
import type { ComposeOption } from 'echarts/core'

defineProps<{}>()

type EChartsOptions = ComposeOption<PieSeriesOption>

provideEcharts(echarts)

echarts.use([
  CanvasRenderer,

  // Charts
  PieChart,
])

const chartOptions = shallowRef<EChartsOptions>({
  series: [
    {
      type: 'pie',
      radius: '70%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<template>
  <view class="relative">
    <UniEcharts
      :option="chartOptions"
      custom-class="chart-container"
    />
  </view>
</template>

<style lang="scss">
.chart-container {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
