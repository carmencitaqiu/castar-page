import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div
    className="header clearfix"
  >
    <div
      className="logo f_l"
    >
      <h3>Castar</h3>
    </div>
    <div
      className="menu_wrapper f_r clearfix"
    >
      <ul
        className="header-menu clearfix f_l"
      >
        <li>Services</li>
        <li>Platform</li>
        <li>Case Studies</li>
      </ul>
      <a className="btn_start f_r">Get Started</a>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
