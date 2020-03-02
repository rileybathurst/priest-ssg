module.exports = {
  siteMetadata: {
    title: 'Priest Sheet Metal & Plate Christchurch',
    titleTemplate: "%s · test seo",
    description: 'Specialist Sheetmetal Engineers, Heavy Plate Workers and Metal Fabricators',
    url: 'https://priestsheetmetal.co.nz/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'user',
          'page',
          'service',
          'menu',
          'sliderone',
          'nextslider',
          'featured',
          'gallery'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },

  ],
}