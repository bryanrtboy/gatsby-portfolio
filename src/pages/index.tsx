import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Bryan Leister">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../content/images/hero.jpg"
        layout="fullWidth"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Bryan Leister" />

export default IndexPage
