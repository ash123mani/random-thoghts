import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'
import blogTemplateStyles from './blog.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      tags
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        var alt
        var url
        if (node.data.target.fields) {
          alt = node.data.target.fields.title['en-US']
          url = node.data.target.fields.file['en-US'].url
        }
        return <img alt={alt || ''} src={url || ''} />
      },
    },
  }

  return (
    <Layout pageName="template">
      <div className={blogTemplateStyles.blogTemplate} id="blogTemp">
        <Head title={props.data.contentfulBlogPost.title} />
        {console.log('edge is !!!  !!!', props.data.contentfulBlogPost)}
        <div className={blogTemplateStyles.top}>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
        </div>
        <div className={blogTemplateStyles.content}>
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )}
        </div>
        <div className={blogTemplateStyles.tags}>
          <p>Author: Ashutosh</p>
          <span>Tags: {props.data.contentfulBlogPost.tags}</span>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
