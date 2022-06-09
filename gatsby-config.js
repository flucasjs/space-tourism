module.exports = {
  siteMetadata: {
    title: `Space tourism website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `space-tourism-website`,
        start_url: `/`,
        background_color: `#0C0E18`,
        icon: `./src/assets/favicon-32x32.png`
      }
    }
  ],
}