import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/pic01.jpg';

const Features = () => (
    <section>
        <header className="major">
        <h2>Brief Look At Your Commute</h2>
        </header>
        <div className="features">
        <article>
            <span className="icon fa-diamond"></span>
            <div className="content">
            <h3>Current Weather</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
        </article>
        <article>
            <span className="icon fa-paper-plane"></span>
            <div className="content">
            <h3>Current Traffic</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
        </article>
        <article>
            <span className="icon fa-rocket"></span>
            <div className="content">
            <h3>Quam lorem ipsum</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
        </article>
        <article>
            <span className="icon fa-signal"></span>
            <div className="content">
            <h3>Sed magna finibus</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            </div>
        </article>
        </div>
    </section>
)

Features.propTypes = {
  siteTitle: PropTypes.string,
}

Features.defaultProps = {
  siteTitle: ``,
}

export default Features;
