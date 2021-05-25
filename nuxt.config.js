export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vue-Vanilla-Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css2?family=Open+Sans' }
   ]
  },
loading: false,
 // Global CSS: https://go.nuxtjs.dev/config-css
css: [
  // Main UIkit file
  'uikit/dist/css/uikit.min.css',
],
// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
  { src: '~/plugins/uikit', ssr: false },
  { src: '~/plugins/date-filter', ssr: false }

],
 // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
 // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/dotenv', { systemvars: true } ]
  ],

// Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  
// Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app',
    credentials: false
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Route all to root and active links
  router: {
  linkActiveClass: 'active',
  extendRoutes(routes, resolve) {
    routes.push({
      path: '*',
      component: resolve(__dirname, 'pages/index.vue')
    })
  },
  middleware: 'log'
  },
  // Environment
  env: {
  baseUrl: process.env.BASE_URL || 'https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app'
  
  },
  pageTransition: {
  name: 'fade',
  mode: 'in-out',
  class: 'uk-transition-fade'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
