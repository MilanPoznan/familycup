require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Family cup`,
    description: `Family cup desc.`,
    author: `MIlan Poznan`,
    backendUrl: 'https://admin.familycup-kafeterija.rs/',
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: `https://admin.familycup-kafeterija.rs/graphql`
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
