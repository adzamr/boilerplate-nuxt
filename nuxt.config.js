export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'boilerplate-nuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Nuxt auth module configuration : https://auth.nuxtjs.org/
  auth: {
    strategies: {
      google: {
        endpoints: {
          token: 'http://adonis-js-ayocoding.rover.digitalservice.id/api/login-with-google',
          userInfo: 'http://adonis-js-ayocoding.rover.digitalservice.id/api/user'
        },
        clientId: process.env.GOOGLE_SOCIAL_LOGIN_CLIENT_ID,
        codeChallengeMethod: '',
        responseType: 'code',
        redirectUri: process.env.BASE_URL,
        logoutRedirectUri: process.env.BASE_URL_LOGOUT
      }
    }
  },

  // define middleware global
  router: {
    middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
