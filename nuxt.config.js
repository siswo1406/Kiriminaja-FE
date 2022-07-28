export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kiriminaja-FE',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@1.3.4/dist/select2-bootstrap4.min.css' }
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js", type: "text/javascript" },
      { src: "https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js", type: "text/javascript" },
      { src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js", type: "text/javascript" },
      { src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/i18n/id.js", type: "text/javascript" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
