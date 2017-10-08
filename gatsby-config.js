module.exports = {
    siteMetadata:{
        title: `Xavier Serrano - Blog`,
        author: `Xavier Serrano`
    },
    plugins: [{
       resolve: `gatsby-plugin-typography`,
       options: {
           pathToConfigModule: `src/utils/typography.js`
       }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/posts`,
            name: `posts`
        }
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: []
        }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
]
}