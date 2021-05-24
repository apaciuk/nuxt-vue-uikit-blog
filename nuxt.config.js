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
  { src: '~/plugins/uikit', ssr: false }

],
 // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
 // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyCLp3Ioi-DdA1EK5yE-bIKBB9gluKIU4M4",
      authDomain: "nuxtblog-4e44e.firebaseapp.com",
      projectId: "nuxtblog-4e44e",
      storageBucket: "nuxtblog-4e44e.appspot.com",
      messagingSenderId: "232166662317",
      appId: "1:232166662317:web:57c222c2fed11d01d5a624"
    },
    services: {
      services: {
        auth: true,
        firestore: false,
        firebase: true,
        functions: true,
        storage: true,
        database: true,
        messaging: true,
        performance: true,
        analytics: true,
        remoteConfig: true
      }
    }
 },

 // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // options
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
  }
  },
  // Environment
  env: {
  baseUrl: process.env.BASE_URL || 'https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app'
  },
  transition: {
  name: 'fade',
  mode: 'in-out'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
