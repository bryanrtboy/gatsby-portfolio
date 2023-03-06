import { graphql } from "gatsby"
import * as React from "react"
import Lightbox from "../../components/lightbox"

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return <Lightbox data={data} pageTitle="interactive" />
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "images/interactive" } }
      sort: { name: DESC }
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
            fields {
              exif {
                raw {
                  image {
                    Artist
                    ImageDescription
                  }
                }
              }
            }
          }
          name
        }
      }
    }
  }
`

export default IndexPage
