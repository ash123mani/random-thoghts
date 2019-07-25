import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <div>
        <h1>About Page</h1>
        <h2>I am Frontend devloper</h2>
        <p>
          Intrested ? <Link to="/contact">Contact</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
