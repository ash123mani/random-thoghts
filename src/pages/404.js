import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="Error" />
      <h1>Page Not Found 404</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
