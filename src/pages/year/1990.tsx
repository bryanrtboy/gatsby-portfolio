import { graphql } from "gatsby"
import * as React from "react"
import Lightbox from "../../components/lightbox"

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return <Lightbox data={data} pageTitle="1990" />
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { name: { regex: "/1990-/" } }
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
