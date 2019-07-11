export default {
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - LucasAlt` : 'LucasAlt'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],

    link: [
      { rel: 'icon', href: 'favicon.jpg', type: 'image/jpeg' }
    ]
  },

  css: [
    'minireset.css',
    '@/assets/scss/app.scss'
  ]
}
