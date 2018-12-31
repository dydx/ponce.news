import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Featured from './featured';
import Menu from './menu';
import Footer from './theme/footer';
import './styles/main.css';

class Layout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sidebarOpen: true
    }
  }

  render () {
    return (
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
                { this.props.children }
                </div>
              </div>
    
              <div id="sidebar" className={(this.state.sidebarOpen) ? '' : 'inactive'}>

                <a className="toggle" onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}>Toggle</a>
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
  }
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//         <div id="wrapper">
//           <div id="main">
//             <div className="inner">
//             { children }
//             </div>
//           </div>

//           <div id="sidebar" className="">
//           <a className="toggle">Toggle</a>
//             <div className="inner">
//               <section id="search" className="alt">
//                 <Link to="/live-broadcast" className="button fit">Live Broadcast</Link>
//               </section>


//               <Menu />

//               <Featured />

//               <Footer siteTitle={data.site.siteMetadata.title} />
//             </div>
//           </div>
//         </div>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
