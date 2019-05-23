// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Blog',
  siteDescription: 'A simple blog designed with Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug'
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
