// this is the category page

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import HeaderContact from "../components/headercontact"
import Img from 'gatsby-image'

const ServicesPage = ({ data }) => (
  <Layout>

    <HeaderContact />

    <main className="container">

      {data.allStrapiService.edges.map(document => (
        <section className="service">
          <div className="service-grid img-100">
            <Link to={`/services/${document.node.slug}`}>
              <Img fluid={document.node.Cover.childImageSharp.fluid} alt={document.node.Title} className="shadow"/>
            </Link>
          </div>

          <div className="services-text bg-light-gray shadow">

            <div className="bg-secondary gp-4">
              <h4 className="services-title">
                  <Link to={`/services/${document.node.slug}`}>
                    {document.node.Title}
                  </Link>
              </h4>
            </div>

            <div className="gp-4">
              {document.node.Content}
            </div>

            <Link to={`/services/${document.node.slug}`}>
              <span className="gm-3 button hollow">More about {document.node.Title}</span>
            </Link>

          </div>
        </section>
      ))}

    </main>

  </Layout>
)

export default ServicesPage

export const pageQuery = graphql`  
  query ServicesQuery {
    allStrapiService {
      edges {
        node {
          id
          Title
          Content
          Cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
        }
      }
    }
  }
`