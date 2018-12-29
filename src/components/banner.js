import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/pic01.jpg';

const Banner = () => (
  <section id="banner">
    <div className="content">
      <header>
        <h1>Man tazed at Greens Package</h1>
        <p></p>
      </header>
      <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
      <ul className="actions">
        <li><a href="#" className="button big">Learn More</a></li>
      </ul>
    </div>
    <span className="image object">
      <img src={ pic01 } alt="" />
    </span>
  </section>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner
