import React from 'react'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import HeaderContact from "../components/headercontact"
// import Img from 'gatsby-image'


import Turny from '../components/either'
import Another from '../components/another'
import More from '../components/more'
// import { hydrate } from 'react-dom'


function Greeting(props) {
    let a = <Turny />
    // return (typeof a) // hey this actually does something
    var b = Object.prototype.toString(a)
    return b
    
}


const ContactPage = ({ data }) => (
  <Layout>

    <HeaderContact />
    <main className="page-width">

        <h1>Contact</h1>

        <h2>Contact Us For Enquiries</h2>

        <p>
            Phone: <a href="tel:(03) 366 9818">(03) 366 9818</a><br />
            Fax: <a href="tel:(03) 366 9819">(03) 366 9819</a><br />
            Email: <a href="mailto:enquiries@priestsheetmetal.co.nz">enquiries@priestsheetmetal.co.nz</a>
        </p>

        <h2>Or Come In And See Us At The Factory</h2>

        <p><a href="https://goo.gl/maps/oAXRnNknMU3vNg2r5">10 Barbour Street,<br />
        Waltham,<br />
        Christchurch, 8011<br />
        New Zealand</a>
        </p>

    </main>

    <div className="bg-light-gray shadow-darker">
        <div className="grid-container">
            <div className="grid-x">
                <div className="cell gp2-tb">
                    <span className="iframe-100">
                        <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9573440490253!2d172.6515813562169!3d-43.544931066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f0816bfbed%3A0xc483fb0bb523cec9!2s10+Barbour+St%2C+Waltham%2C+Christchurch+8011%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1473280636797" width="1200" height="450" frameborder="0" allowfullscreen className="lozad vimeo"></iframe>
                    </span>
                </div>
            </div> {/* .grid-x */}
        </div> {/* .grid-container */}
    </div>


    {/* <h1>{data.strapiService.Title}</h1> */}

    <hr />
    <Turny />
    <hr />
    <Greeting />


  </Layout>
)

export default ContactPage



export const query = graphql`
    query Turn {
        strapiService(id: {eq: "Service_2"}) {
            Title
        }
    }
`