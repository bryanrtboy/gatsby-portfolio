import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="About Bryan Leister">
      <h6>About</h6>
      <p>Bryan Leister is an artist living in Denver, Colorado.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Bryan Leister" />

export default IndexPage
