import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.aboutPage}>
        <h1>Ashutosh Mani Tripathi</h1>
        <h2>Front End Developer</h2>
        <p>
          My email Id:- <a href="mailto: ashuma2721@gmail.com" title="mail">ashuma2721@gmail.com</a>
        </p>
        <p>
          My Github Store Room:- <a href="https://github.com/ash123mani" target="_blank" title="github">Jump Inside it</a>
        </p>
        <p>
          My Linkedin:- <a href="https://www.linkedin.com/in/ashutosh-tripathi-508340105/" title="Linkedin" target="_blank">Explore More</a>
        </p>
        <p>
          My Poems:- <a href="https://www.instagram.com/lost__mani/" title="poems" target="_blank">Read it</a>
        </p>
        <p>
          Bonus for you:- <a href="https://www.quora.com/profile/Ashutosh-Mani-Tripathi-1" title="bonus" target="_blank">Free hit</a>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
