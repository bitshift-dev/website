import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`software`, `consultancy`, `consulting`, `python`, `javascript`, `python consulting`, `software consulting agency`, `agency`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
