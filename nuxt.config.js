export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    },

    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - LucasAlt` : 'LucasAlt'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // SEO
      { name: 'author', content: 'LucasAlt' },
      { name: 'description', content: 'Front-end developer, UI/UX designer, minimalist, i leave my mark on this immense web that is the internet.' },
      { name: 'keywords', content: 'LucasAlt, LucasCtrl, LucasCtrlAlt, developer, front-end, front-end developer, frontend, frontend developer, freelance, self-taught, self-taught developer, web, web developer, designer, ui, ux, ui designer, ux designer, designer ui, designer ux' },

      // Open Graph
      { property: 'og:locale', content: 'en-US' },
      { property: 'og:site_name', content: 'LucasAlt portfolio' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://lucasalt.fr' },
      { property: 'og:title', content: 'LucasAlt' },
      { property: 'og:description', content: 'Front-end developer, UI/UX designer, minimalist, i leave my mark on this immense web that is the internet.' },
      { property: 'og:image', content: 'https://lucasalt.fr/favicon.jpg' },

      // Twitter card
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@LucasCtrlAlt' },
      { property: 'twitter:creator', content: '@LucasCtrlAlt' },
      { property: 'twitter:title', content: 'LucasAlt' },
      { property: 'twitter:description', content: 'Front-end developer, UI/UX designer, minimalist, i leave my mark on this immense web that is the internet.' },
      { property: 'twitter:image', content: 'https://lucasalt.fr/favicon.jpg' },
      { property: 'twitter:url', content: 'https://lucasalt.fr' },
    ],

    link: [
      { rel: 'icon', href: 'favicon.jpg', type: 'image/jpeg' }
    ]
  },

  css: [
    'minireset.css',
    '@/assets/scss/app.scss'
  ],

  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-96092314-4' }]
  ]
}
