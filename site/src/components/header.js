import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
// import Menu from "../components/menu"

const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-primary hero-logo">
      <Logo />
    </div>
    <a herf="" data-open="my-info" className="h4 white-a">
      <div className="hide-for-medium bg-secondary shadow-darker text-center gp-tb"> {/* small navigation */}
        Menu
      </div>
    </a>

    <div className="cell shrink show-for-medium bg-secondary shadow"> {/* medium up navigation */}
      <nav>
        <div className="menu-primary-container">
          <ul className="menu align-center">
            <li><Link>Home</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Gallery</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
        </div>
        {/* <Menu></Menu> */}
      </nav>{/* .main-navigation */}
    </div>{/* medium up nav */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

