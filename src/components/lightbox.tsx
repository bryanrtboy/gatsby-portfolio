import * as React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "./layout"
import SEO from "./seo"
import Gallery from "@browniebroke/gatsby-image-gallery"

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

const Lightbox: React.FC = ({ data, pageTitle, subMenu }) => {
  const images = data.images.edges.map(({ node }, index) => ({
    ...node.childImageSharp,
    // Use the filename stripped of date prefix to name the file
    caption: (
      <div>
        {node.childImageSharp.fields.exif.raw.image.Artist +
          "| " +
          node.name.slice(0, 4)}{" "}
        {node.childImageSharp.fields.exif.raw.image.ImageDescription ? (
          <>
            <input type="checkbox" id="detailToggle" className="hidden" />
            <label for="detailToggle" className="button">
              | details
            </label>
            <span className="details">
              {node.childImageSharp.fields.exif.raw.image.ImageDescription}
            </span>
          </>
        ) : null}
      </div>
    ),
    title: <div>{node.name.replace(/^.{10}|-/g, " ")}</div>,
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
      <>{subMenu}</>
      <Gallery
        images={images}
        lightboxOptions={lightboxOptions}
        onClose={onClose}
      />
    </Layout>
  )
}

export default Lightbox
