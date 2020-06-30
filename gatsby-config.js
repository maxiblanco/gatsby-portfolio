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
    'gatsby-plugin-fontawesome-css',
  ],
};
