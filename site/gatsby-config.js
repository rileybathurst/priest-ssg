module.exports = {
  siteMetadata: {
    title: 'Priest Sheet Metal & Plate Christchurch',
    titleTemplate: "%s",
    description: 'Specialist Sheetmetal Engineers, Heavy Plate Workers and Metal Fabricators',
    url: 'https://priestsheetmetal.co.nz/',
    image: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg', // this could probably be a specific image once I know if it works
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg',
    areaServed: 'Christchurch, New Zealand',
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
          'gallery',
          'videos'
        ],
        queryLimit: 2000,
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
        background_color: '#1e93bd',
        theme_color: '#1e93bd',
        display: 'minimal-ui',
        icon: 'src/images/priest-icon-256x256.png', // This path is relative to the root of the site.
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
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: false,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Slab`,
          `source sans pro\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}