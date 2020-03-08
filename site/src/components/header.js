import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import SmallMenu from "../components/smallmenu"

const Header = ({ siteTitle }) => (
  <>
    <header>
      <div className="bg-primary hero-logo">
        <Logo />
      </div>

      <div className="hide-for-medium bg-secondary shadow-darker text-center">
        <SmallMenu />
      </div>

      <nav id="menu_small" className="menu-small hide-for-print inactive">
        <ul className="text-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="bg-secondary show-for-medium shadow"> {/* medium up navigation */}
        <nav>
          <div className="menu-primary-container">
            <ul className="menu align-center">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* medium up nav */}
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
