import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
// import Image from "../components/image"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <main className="container">
      <div className="bg-light-gray ngm-top gm-bottom shadow">
        <div className="hero gp-top">

          <div className="small-12 medium-6 cell cfimg">
            {data.allStrapiSliderone.edges.map(document => (
              <picture>
                <Img fluid={document.node.sliderimage.childImageSharp.fluid} className="shadow" />
              </picture>
            ))}
          </div>
          
          <div>
            <h1>SPECIALIST WELDERS, SHEETMETAL ENGINEERS &amp; GENERAL FABRICATORS IN CHRISTCHURCH.</h1>
            <p>Our team of welders and engineers can tackle any welding or fabrication job. We specalise in TIG, MIG, ARC and resistance-Spot Welding. We can weld alloy, mild steel, stainless and much more. Our Fabricators can fold, stamp, punch, and cut to your requirements with our specialized machinery and experience.</p>
          </div>
        </div> {/* hero gp-top */}

        <div className="hero gp-top">

          <div className="small-12 medium-6 cell cfimg hero-order-image">
            {data.allStrapiNextslider.edges.map(document => (
              <picture>
                <Img fluid={document.node.nextimage.childImageSharp.fluid} className="shadow" />
              </picture>
            ))}
          </div>
          
          <div className="small-12 medium-6 cell hero-order-text">
            <h2>We're Experienced Sheetmetal Engineers.</h2>
            <p>Priest Sheetmetal &amp; Plate Ltd is a family run business that has operated out of our 10 Barbour St address in Waltham, Christchurch for over 63 years. Let our experience guide you from design, manufacture, to assembly and installation of your fabrication project.</p>
          </div>
        </div>{/* hero gp-top */}

        <div className="hero gp-top">
            <div id="header-contact--phone" className="display-grid bg-dark-gray gm-bottom shadow">
              <div className="grid-icon bg-black gp-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"  fill="#fefefe"/></svg>
              </div>
              <div className="grid-text bg-dark-gray gp-4">
                <p className="one-point-two-em no-margin"><b><a href="tel:033669818">Call us today to discuss your project: 366 9818</a></b></p>
              </div>
            </div> {/* .display-grid */}

            <div id="header-contact--place" className="display-grid bg-dark-gray gm-bottom shadow">
              <div className="grid-icon bg-black gp-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" fill="#fefefe"/><circle cx="12" cy="9" r="2.5" fill="#fefefe"/></svg>
              </div>
              <div className="grid-text bg-dark-gray gp-4">
                <p className="one-point-two-em no-margin"><b><a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">Find us at 10 Barbour Street, Christchurch</a></b></p>
              </div>
            </div> {/* .display-grid */}
        </div>{/* hero gp top */}
      </div>{/* bg-light-gray */}

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
                <h4 className="services-title">
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

    <div className="bg-light-gray shadow-darker">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell gp2-tb">
            <span className="iframe-100">
              <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9573440490253!2d172.6515813562169!3d-43.544931066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f0816bfbed%3A0xc483fb0bb523cec9!2s10+Barbour+St%2C+Waltham%2C+Christchurch+8011%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1473280636797" width="1200" height="450" frameBorder="0" allowFullScreen className="lozad vimeo"></iframe>
            </span>
          </div>
        </div> {/* .grid-x */}
      </div> {/* .grid-container */}
    </div>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
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

    allStrapiPage {
      edges {
        node {
          id
          title
          content
        }
      }
    }

    allStrapiSliderone {
      edges {
        node {
          id
          title
          sliderimage {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    
    allStrapiNextslider {
      edges {
        node {
          id
          title
          nextimage {
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