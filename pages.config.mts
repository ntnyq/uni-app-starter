import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    backgroundColor: '#FFFFFF',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'Starter Uni App',
    navigationStyle: 'default',
    // h5: {
    //   navigationStyle: 'custom',
    // },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#ffd300',
    list: [
      {
        iconPath: 'static/images/tabbar/news.png',
        pagePath: 'pages/index/index',
        selectedIconPath: 'static/images/tabbar/news_active.png',
        text: '日推',
      },
      {
        iconPath: 'static/images/tabbar/user.png',
        pagePath: 'pages/user/index',
        selectedIconPath: 'static/images/tabbar/user_active.png',
        text: '我的',
      },
    ],
  },
})
