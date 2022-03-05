module.exports = {
    siteMetadata: {
        title: `My Fashion Blog`,
        description: `This is my fashion blog where I write about fashion.`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
            },
        },
    ],
};