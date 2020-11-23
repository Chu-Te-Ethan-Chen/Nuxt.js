const axios = require('axios');
export default {
  target: 'static',
  router: {
    base: '/Nuxt.js/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" }
    ]
  },

  // G bal CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@plugins/core-components.js',
    '@plugins/date-filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-8d18b.firebaseio.com',
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-8d18b.firebaseio.com',
    fbAPIKey: 'AIzaSyDhrpB2eJhPxuBeplBk0SF7lV_uTBTjmpc'
  },
  generate: {
    routes: function() {
      return axios
        .get('https://nuxt-blog-8d18b.firebaseio.com/posts.json')
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              routes: "/posts" + key,
              payload: {postData: res.data[key]}
            });
          }
          return routes;
        });
    }
  }
}
