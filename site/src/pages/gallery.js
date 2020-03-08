import React from 'react'
import Layout from '../components/layout'
import HeaderContact from "../components/headercontact"
import Img from 'gatsby-image'

const GalleryPage = ({ data }) => (
  <Layout>

    <HeaderContact />
    <main className="gallery-width">
      <h1 className="text-center">Gallery</h1>

      <ul className="blocks-gallery-grid" >
        {data.allStrapiGallery.edges.map(document => (
          // <li className="blocks-gallery-item gallerygallery">
          <li className="gallerygallery">
            <Img fluid={document.node.galleryImage.childImageSharp.fluid} />
          </li>
        ))}
      </ul>

    </main>

  </Layout>
)

export default GalleryPage

export const pageQuery = graphql`  
  query GalleryQuery {
    allStrapiGallery {
      edges {
        node {
          galleryImage {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

  }
`