// this is the single page

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import HeaderContact from "../components/headercontact"

import Turn from "../components/either.js"


function Greeting(props) {
  var a = 0

  if (a === 1) {
    return "foo";
  }
  return "bar";
}

const ArticleTemplate = ({ data }) => (
  <Layout>
      <HeaderContact />

      <article style={{ 
          maxWidth: '75rem',
          marginLeft: 'auto',
          marginRight: 'auto'
      }}>

        <Img fluid={data.strapiService.Cover.childImageSharp.fluid}/>
        <hr className="swiss" />
        <div style={{
            display: 'flex',
            marginBottom: '28px'
        }}>
            <h2 className="wp-block-colum">{data.strapiService.Title}</h2>
            <p className="wp-block-colum">{data.strapiService.Content}</p>
        </div>

          <hr className="swiss" />

{/* PHOTO GALLERY */}
          <div style={{
            display: 'flex',
            marginBottom: '28px'
        }}>
          <h3 className="wp-block-colum">Photo Gallery</h3>
          <div className="wp-block-colum">
            <figure className="wp-block-gallery columns-2 is-cropped">
              <ul className="blocks-gallery-grid">
            {/* not gatsby Img so and not responsive image but day 1 this is atleast working */}
            {data.strapiService.Gallery.map(photos => 
              <>
                <li className="blocks-gallery-item">
                  <figure>
                <img src={photos.url} alt={photos.name} loading="lazy" />
                {/* needs a lozad lazy load for everything other than chrome */}
                {/* make this a variable and do some work on it, remove the extension, change it, add sizes etc */}
                </figure>
                </li>
              </>
              )}
              </ul>
              </figure>
            </div>{/* column */}
          </div>


              <Turn />



    </article>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiService(id: {eq: $id}) {
      Title
      Content
      Cover {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Gallery {
        name
        url
      }
    }
  }
`