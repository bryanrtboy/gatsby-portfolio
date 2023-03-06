import { Link, graphql } from "gatsby"
import * as React from "react"
import Lightbox from "../../components/lightbox"

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Lightbox
      data={data}
      pageTitle="installations"
      subMenu=<div
        style={{
          position: "relative",
        }}
      >
        <ul
          class="sub-menu"
          style={{
            textDecoration: "none",
            display: "inline",
          }}
        >
          <li
            style={{
              textDecoration: "none",
              display: "inline",
            }}
          >
            <Link
              to="/installations/becky"
              style={{
                color: "black",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Becky
            </Link>
          </li>
        </ul>
      </div>
    />
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "images/installations" } }
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
