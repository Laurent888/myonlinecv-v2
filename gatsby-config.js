module.exports = {
  siteMetadata: {
    title: "Laurent Tram Frontend Developer",
    descriptiom : "Frontend developer React in Stockholm"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    // FILE SYSTEM
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-playground`,
    // IMAGE
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
