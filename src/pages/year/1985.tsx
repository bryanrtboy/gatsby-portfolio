import { graphql } from "gatsby"
import * as React from "react"
import Lightbox from "../../components/lightbox"

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return <Lightbox data={data} pageTitle="1985" />
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { name: { regex: "/1985-/" } }
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
