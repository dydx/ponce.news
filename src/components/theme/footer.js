import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
    <footer id="footer">
        <p className="copyright">&copy; { siteTitle }. All Rights Reserved.</p>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;
