import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'Starter Uni App',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
    // h5: {
    //   navigationStyle: 'custom',
    // },
  },
  easycom: {
    autoscan: true,
    custom: {},
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#ffd300',
    list: [
      {
        iconPath: 'static/images/tabbar/news.png',
        selectedIconPath: 'static/images/tabbar/news_active.png',
        pagePath: 'pages/index/index',
        text: '日推',
      },
      {
        iconPath: 'static/images/tabbar/user.png',
        selectedIconPath: 'static/images/tabbar/user_active.png',
        pagePath: 'pages/user/index',
        text: '我的',
      },
    ],
  },
})
