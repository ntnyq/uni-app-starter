<script lang="ts" setup>
const toast = useToast()

const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])

const handleToast = () => {
  toast({
    title: 'Hello Uni-App',
  })
}
</script>

<template>
  <view class="swiper-wrapper">
    <WdSwiper
      :list="swiperList"
      :current="0"
      height="200px"
      autoplay
    />
  </view>
  <view class="flex justify-center p-4">
    <WdButton @click="handleToast">Primary</WdButton>
    <!-- <WdToast></WdToast> -->
  </view>
</template>
