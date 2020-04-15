// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
import router from './router'
// import store from './store'
// import { getToken } from '@/utils/auth' // get token from cookie

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const SYSTEM_APPID = process.env.VUE_APP_SYSTEM_APPID
// const ONEID_OAUTH_URL = process.env.VUE_APP_ONEID_OAUTH_URL

router.beforeEach(async(to, from, next) => {
  // NProgress.start()

  document.title = to.meta.title || 'rms'

  next()

  // // 如果url上带有code，则需要调用getAuthorize
  // if (to.query && to.query.code) {
  //   const sData = {
  //     code: to.query.code,
  //     grantType: 'authorization_code',
  //     redirectUri: window.location.origin
  //   }
  //   const result = await store.dispatch('user/getAuthorize', sData)
  //   if (result.item.sessionID) {
  //     router.replace(to.path) // 去掉url上的query参数
  //   }
  //   return
  // }

  // const token = getToken()
  // if (token) {
  //   // 有token
  //   const sData = {
  //     sessionId: token
  //   }
  //   try {
  //     const result = await store.dispatch('user/getIdentity', sData)
  //     if (result.item && result.item.loginStatus === 'ONLINE') {
  //       // 登录信息有效
  //       next()
  //     } else {
  //       // 登录信息无效
  //       window.location.href = ONEID_OAUTH_URL + '?appID=' + SYSTEM_APPID + '&redirectUri=' + encodeURIComponent(window.location.origin) + '&responseType=code&state='
  //       NProgress.done()
  //     }
  //   } catch (error) {
  //     NProgress.done()
  //   }
  // } else {
  //   // 无token
  //   window.location.href = ONEID_OAUTH_URL + '?appID=' + SYSTEM_APPID + '&redirectUri=' + encodeURIComponent(window.location.origin) + '&responseType=code&state='
  //   NProgress.done()
  // }
})

router.afterEach(() => {
  // NProgress.done()
})
