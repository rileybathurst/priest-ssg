/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import Image from "../components/image"

import Header from "./header"
import Footer from "./footer"
// import "./layout.css"

import SEO from "./seo"

const Layout = ({ children }) => {

  return (
    <>
      <SEO

      />
      <Header />
      {/* <Image /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
