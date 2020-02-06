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
          <>
            <section className="service">
              <div className="service-grid img-100">
                <Link to={`/${document.node.id}`}>
                  <Img fluid={document.node.Cover.childImageSharp.fluid} className="shadow"/>
                </Link>
              </div>

              <div className="services-text bg-light-gray shadow">

                <div className="bg-primary gp-4">
                  <h4>
                      <Link to={`/${document.node.id}`}>
                          {document.node.Title}
                        </Link>
                  </h4>
                </div>

                <div className="gp-4">
                  {document.node.Content}
                </div>

                <Link to={`/${document.node.id}`}>
                  <span className="gm-3 button hollow">More about {document.node.Title}</span>
                </Link>
                
              </div>
            </section>
          </>
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
        }
      }
    }

  }
`