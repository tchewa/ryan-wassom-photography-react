module.exports = {
  siteMetadata: {
    title: "ryan-wassom-photography",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
