import { graphql } from "gatsby"
import * as React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Gallery from "@browniebroke/gatsby-image-gallery"

const pageTitle: string = "recent"

interface ImageSharpEdge {
  node: {
    childImageSharp: {
      thumb: IGatsbyImageData
      full: IGatsbyImageData
    }
  }
}

interface PageProps {
  data: {
    images: {
      edges: ImageSharpEdge[]
    }
  }
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    // Use the filename stripped of date prefix to name the file
    caption: `${
      "title: " +
      node.name.replace(/^.{10}|-/g, " ") +
      ", " +
      node.name.slice(0, 4)
    }`,
  }))

  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: "Image did not load",
    nextLabel: "Next",
    prevLabel: "Previous",
    zoomInLabel: "Zoom In",
    zoomOutLabel: "Zoom Out",
    closeLabel: "Close",
  }

  //Add callback to Lightbox onCloseRequest
  const onClose = () => {
    console.log("Lightbox was closed")
  }

  return (
    <Layout>
      <SEO title={pageTitle} />
      <h6>{pageTitle}</h6>
      <Gallery
        images={images}
        lightboxOptions={lightboxOptions}
        onClose={onClose}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { name: { regex: "/2020-/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
      }
    }
  }
`

export default IndexPage
