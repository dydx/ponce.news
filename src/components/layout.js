import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Featured from './featured';
import Menu from './menu';
import Footer from './theme/footer';
import './styles/main.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <div id="wrapper">
          <div id="main">
            <div className="inner">
            { children }
            </div>
          </div>

          <div id="sidebar">
            <div className="inner">
              <section id="search" className="alt">
                <Link to="/live-broadcast" className="button fit">Live Broadcast</Link>
              </section>


              <Menu />

              <Featured />

              <Footer siteTitle={data.site.siteMetadata.title} />
            </div>
          </div>
        </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
