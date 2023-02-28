import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Images By Year">
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "year" } }
      sort: { name: ASC }
    ) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Images By Year" />

export default BlogPage
