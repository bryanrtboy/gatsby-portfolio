import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  // Get all images from query
  const images = data.images.edges
  // Select a random index
  const randomIndex = Math.floor(Math.random() * images.length)
  // Get the gatsbyImageData object for the random image
  const randomImage = images[randomIndex].node.childImageSharp.gatsbyImageData

  return (
    <Layout pageTitle="Bryan Leister">
      <GatsbyImage
        image={randomImage}
        alt="Random Image"
        layout="constrained"
        height={300}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Bryan Leister" />

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: {
        name: { regex: "/^[0-9]{4}/i" }
        childImageSharp: { fluid: { aspectRatio: { gt: 1 } } }
      }
      limit: 50
      sort: { name: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              transformOptions: { fit: COVER, cropFocus: ATTENTION }
            )
          }
        }
      }
    }
  }
`

export default IndexPage
