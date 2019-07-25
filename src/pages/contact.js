import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <Head  title="Contact"/>
      <div>
        <h1>Contact Page</h1>
        <h2>React to me at 8971711723</h2>
        <p>
          Want to judge me ?
          <a href="https://github.com/ashutripath" target="_blank">
            My Github
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
