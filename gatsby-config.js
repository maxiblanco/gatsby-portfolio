const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Maximiliano Blanco',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['/src'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Maximiliano Blanco Portfolio',
        short_name: 'Maximiliano Blanco',
        start_url: '/',
        icon: 'src/assets/images/favicon-32x32.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-use-dark-mode',
    'gatsby-plugin-playground',
  ],
};
