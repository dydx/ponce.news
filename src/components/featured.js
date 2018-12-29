import React from 'react';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

const Featured = () => (
    <section>
        <header class="major">
            <h2>Featured Pictures</h2>
        </header>
        <div class="mini-posts">
            <article>
                <a href="https://www.instagram.com/p/Br78HlEgLa5/" className="image"><img src="https://www.instagram.com/p/Br78HlEgLa5/media/?size=m" alt="" /></a>
                <p>Flooding at Inman Park after heavy rains.</p>
            </article>
            <article>
                <a href="https://www.instagram.com/p/BrT0sEug11l/" className="image"><img src="https://www.instagram.com/p/BrT0sEug11l/media/?size=m" alt="" /></a>
                <p>A truck tries to park on a ledge. This ends badly.</p>
            </article>
            <article>
                <a href="https://www.instagram.com/p/Bds-B4Rhf5G/" className="image"><img src="https://www.instagram.com/p/Bds-B4Rhf5G/media/?size=m" alt="" /></a>
                <p>A driver allegedly pulled out in front of a MARTA bus in rush hour traffic.</p>
            </article>
        </div>
        <ul class="actions">
            <li><a href="https://instagram.com/poncenewsnetwork" className="button">More</a></li>
        </ul>
    </section>
);

export default Featured;