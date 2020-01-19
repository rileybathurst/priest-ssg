import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
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
      }
    }
`