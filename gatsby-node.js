const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const techBlogTemplate = path.resolve('./src/templates/techBlog.js')

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            tags
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    // if (edge.node.tags.includes('tech')) {
    //   createPage({
    //     component: techBlogTemplate,
    //     path: `/blog/${edge.node.slug}`,
    //     context: {
    //       slug: edge.node.slug,
    //     },
    //   })
    // } else {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
    // }
  })
}
