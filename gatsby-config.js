require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Family cup`,
    description: `Family cup desc.`,
    author: `MIlan Poznan`,
    backendUrl: process.env.GATSBY_WP_URL || 'http://localhost:8888/kafeterija/',
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: `${process.env.GATSBY_WP_URL}/graphql`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg-images/
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`

  ],
};
