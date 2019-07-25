import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import TagsButton from '../components/tagsButton'

import homeStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={homeStyles.homePage}>
        <div>
          <div>
            <h1>Random Thoughts</h1>
            <p></p>
          </div>
        </div>
        <TagsButton class="inlineButton" />
      </div>
    </Layout>
  )
}

export default IndexPage
