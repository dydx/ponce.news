import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
    <nav id="menu">
        <header class="major">
            <h2>News Sections</h2>
        </header>
        <ul>
            <li><Link to="/">Latest News</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/">Offbeat</Link></li>
            <li><Link to="/">Traffic</Link></li>
            <li><Link to="/">Politics</Link></li>
            <li><Link to="/">Entertainment</Link></li>
            <li><Link to="/">Sports</Link></li>
        </ul>
    </nav>
);

export default Menu;