

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fangsea.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1.0,minimal-ui' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[{src:'/three.min.js'}]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router: {
    middleware: 'i18n'
  },
  vendor: ['axios','qs','bootstrap','echarts','element-ui'],
  plugins: [
    '~/plugins/i18n.js',
    { src: '~plugins/element-ui'},
    { src: '~/plugins/vue-particles',ssr:false},
    { src: '~/plugins/iscroll',ssr:false}
  ],
  generate: {
    routes: ['/','/en']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
    }
  },
  css:['bootstrap/dist/css/bootstrap.min.css'],

}

