import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"

const Header = ({ siteTitle }) => (
  <header>
    <div class="bg-primary hero-logo">
      <Logo />
    </div>
    <a herf="" data-open="my-info" class="h4 white-a">
      <div class="hide-for-medium bg-secondary shadow-darker text-center gp-tb"> {/* small navigation */}
        Menu
      </div>
    </a>

    <div class="cell shrink show-for-medium bg-secondary shadow"> {/* medium up navigation */}
      <nav>
        <Menu></Menu>
      </nav>{/* .main-navigation */}
    </div>{/* medium up nav */}


    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960, 
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

