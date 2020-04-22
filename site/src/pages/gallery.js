import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HeaderContact from "../components/headercontact"
import Img from 'gatsby-image'
import Seo from "../components/seo"

const GalleryPage = ({ data }) => (
  <Layout>
  <Seo 
    title="Gallery - Priest Sheet Metal &amp; Plate Christchurch"
  />

    <HeaderContact />
    <main className="gallery-width">
      <h1 className="text-center">Gallery</h1>

      <ul className="blocks-gallery-grid" >
        {data.allStrapiGallery.edges.map(document => (
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