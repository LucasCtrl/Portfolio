module.exports = {
  siteMetadata: {
    title: `LucasAlt`,
    description: `Hi there, I'm Lucas, a front-end developer, UI/UX designer, minimalist. I leave my mark on this immense web that is the internet.`,
    author: `LucasAlt | lucasalt.fr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "lucasalt-portfolio", // (REQUIRED, replace with your own)
        linkResolver: () => post => `/${post.uid}`,
        path: "/preview",
        preview: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LucasAlt portfolio`,
        short_name: `LucasAlt`,
        start_url: `/`,
        background_color: `#FAF7FF`,
        theme_color: `#FAF7FF`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96092314-4",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
