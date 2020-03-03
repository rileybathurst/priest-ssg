// this is the single page

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import HeaderContact from "../components/headercontact"

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

          {/* not gatsby Img so and not responsive image but day 1 this is atleast working */}
          {data.strapiService.Gallery.map(photos => 
          <>
              <img src={photos.url} />


              {/* <p>{photos.url}</p> make this a variable and do some work on it, remove the extension, change it, add sizes etc */}
              </>
          )}

        </div>
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