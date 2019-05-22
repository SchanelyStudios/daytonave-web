import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentService from '../services/content.service';

const IndexPage = () => {
  const copy = ContentService.home;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{copy.title}</h1>
      {copy.introBlock}
      {copy.graphic}
      <Link to="/about/">Go to About</Link>
    </Layout>
  )
}

export default IndexPage
