import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header id="header">
    <a href="index.html" className="logo"><strong>Ponce News Network</strong> - A Name In News</a>
    <ul className="icons">
      <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
      <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
