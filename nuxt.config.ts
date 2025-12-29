// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  app: {
    baseURL:"/Photography/",
    nitro:{
        preset:'static',
        output:{
            dir: './dist',
            publicDir: './public'
        }
    },
    head: {
      title: '影集社 - 摄影分享与交流平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '全场景摄影分享与垂直交流生态平台，提供作品展示、摄影教程、商业对接等服务' },
        // Open Graph
        { property: 'og:title', content: '影集社 - 摄影分享与交流平台' },
        { property: 'og:description', content: '全场景摄影分享与垂直交流生态平台，优质摄影作品、教程、商业对接一站式服务。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://your-domain.com' },
        { property: 'og:image', content: 'https://your-domain.com/og-image.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '影集社 - 摄影分享与交流平台' },
        { name: 'twitter:description', content: '全场景摄影分享与垂直交流生态平台，优质摄影作品、教程、商业对接一站式服务。' },
        { name: 'twitter:image', content: 'https://your-domain.com/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: [
    '~/assets/css/main.scss'
  ]
})
