import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
// import Image from "../components/image"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <div id="header-contact-background" className="shadow">
      <div className="header-contact">
        <h3>SPECIALIST WELDERS, SHEETMETAL ENGINEERS &amp; GENERAL FABRICATORS IN CHRISTCHURCH.</h3>

        <section className="together">
          <div id="header-contact--phone" className="display-grid bg-dark-gray gm-bottom shadow">
            <div className="grid-icon bg-black gp-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"  fill="#fefefe"/></svg>
            </div>
            <div className="grid-text bg-dark-gray gp-4">
              <p className="one-point-two-em no-margin-bottom"><b><a href="tel:033669818">Call us today to discuss your project: 366 9818</a></b></p>
            </div>
          </div> {/* .display-grid */}

          <div id="header-contact--place" className="display-grid bg-dark-gray gm-bottom shadow">
            <div className="grid-icon bg-black gp-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" fill="#fefefe"/><circle cx="12" cy="9" r="2.5" fill="#fefefe"/></svg>
            </div>
            <div className="grid-text bg-dark-gray gp-4">
              <p className="one-point-two-em no-margin-bottom"><b><a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">Find us at 10 Barbour Street, Christchurch</a></b></p>
            </div>
          </div> {/* .display-grid */}
        </section> {/* .together */}
      </div> {/* .hero */}
    </div> {/* .bg-light-gray */}

    <ul>
    </ul>

    <main className="container" role="document">
      <div className="bg-light-gray ngm-top gm-bottom shadow"></div>
      <div className="hero gp-top">
        {/* no script Cross fading images aka slider aka carousel http://css3.bradshawenterprises.com/cfimg/ */}
        <div className="cfimg shadow">


          {data.allStrapiSliderone.edges.map(document => (
            <>
              <p>{document.node.id}</p>
              <p>{document.node.image.absolutePath}</p>
              <Img fluid={document.node.image.childImageSharp.fluid}/>
            </>
          ))}

          {/* <Slider /> */}

        </div>{/* cfimg */}
      </div> {/* hero keeps the content together */}
    </main>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiService {
      edges {
        node {
          id,
          Title,
          Content
        }
      }
    }

  allStrapiPage {
      edges {
        node {
          id,
          title,
          content
        }
      }
    }

    allStrapiSliderone {
      edges {
        node {
          id
          image {
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