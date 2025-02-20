import process from 'node:process'
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import { loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV!, process.cwd())

export default defineManifestConfig({
  appid: env.VITE_UNI_APPID,
  description: '__TODO__',
  h5: {},
  locale: 'zh-Hans',
  'mp-weixin': {},
  name: env.VITE_APP_TITLE,
  transformPx: false,
  versionCode: '1',
  versionName: '1.0.0',
  vueVersion: '3',
  'app-plus': {
    compilerVersion: 3,
    /* 模块配置 */
    modules: {},
    nvueStyleCompiler: 'uni-app',
    screenOrientation: ['portrait-primary'],
    usingComponents: true,
    /* 应用发布信息 */
    distribute: {
      /* ios打包配置 */
      ios: {},
      /* SDK配置 */
      sdkConfigs: {},
      /* android打包配置 */
      android: {
        abiFilters: ['armeabi-v7a', 'arm64-v8a'],
        minSdkVersion: 30,
        targetSdkVersion: 30,
        permissions: [
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>',
        ],
      },
      /* 图标配置 */
      icons: {
        android: {},
        ios: {},
      },
    },
    splashscreen: {
      alwaysShowBeforeRender: true,
      autoclose: true,
      delay: 0,
      waiting: true,
    },
  },

  uniStatistics: {
    enable: false,
  },
})
