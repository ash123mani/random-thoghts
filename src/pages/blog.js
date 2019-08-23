import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { FilterConsumer } from '../components/layout'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            excerpt
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
            tags
          }
        }
      }
    }
  `)

  return (
    <FilterConsumer>
      {value => (
        <Layout pageName="blogPage">

          <Head title="Blogs" />
          <div>
            <ol className={blogStyles.posts}>
              {data.allContentfulBlogPost.edges.map((edge, index) => {
                return (
                  <li key={index} className={blogStyles.post}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <h2>{edge.node.title}</h2>
                      <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
                      <div className={blogStyles.metaInfo}>
                        <p className={blogStyles.date}>
                          Date: {edge.node.publishedDate}
                        </p>
                        <p className={blogStyles.tag}>Tag: {edge.node.tags}</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
        </Layout>
      )}
    </FilterConsumer>
  )
}

export default BlogPage
