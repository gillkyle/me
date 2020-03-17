module.exports = {
  siteMetadata: {
    title: 'Kyle Gill | Developer & Designer',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gill_kyle`,
      },
      {
        name: `github`,
        url: `https://github.com/gillkyle`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-favicon',
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kyle Gill | Developer & Designer',
        short_name: 'Kyle Gill',
        start_url: '/',
        background_color: '#E6F1FF',
        theme_color: '#5390F0',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: '/blog',
        contentPath: `${__dirname}/content/posts`,
        assetPath: `${__dirname}/content/assets`,
        mdx: true,
      },
    },
  ],
}
