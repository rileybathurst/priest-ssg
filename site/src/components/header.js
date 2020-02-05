import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
// import Menu from "../components/menu"

// import Console from "../components/count"
import Hook from "../components/hook"

const Header = ({ siteTitle }) => (
  <>
    <header>
      <div className="bg-primary hero-logo">
        <Logo />
      </div>

      <div className="hide-for-medium bg-secondary shadow-darker text-center gp-tb">
        <Hook />
      </div>

      <nav id="menu_small" className="menu-small hide-for-print inactive">
        <ul className="vertical menu text-center">
          <li><Link>Home</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>Gallery</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
      </nav>

      <div className="bg-secondary shadow"> {/* medium up navigation */}
        <nav>
          <div className="menu-primary-container">
            <ul className="menu align-center">
              <li><Link>Home</Link></li>
              <li><Link>Services</Link></li>
              <li><Link>Gallery</Link></li>
              <li><Link>Contact</Link></li>
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
