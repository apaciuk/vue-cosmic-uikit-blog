export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-uikit-nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
// Global CSS: https://go.nuxtjs.dev/config-css
css: [
  // Main UIkit file
  'uikit/dist/css/uikit.min.css',
  //Custom UIkit
  '@assets/custom.css',
],
// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
  { src: '~/plugins/uikit', ssr: false },
  { src: '~/plugins/cards', ssr: false },
  { src: '~/plugins/axios' }
],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in'
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
 axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
 },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
}
}
