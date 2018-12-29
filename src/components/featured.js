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
                <a href="#" className="image"><img src={ pic01 } alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
                <a href="#" className="image"><img src={ pic02 } alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
                <a href="#" className="image"><img src={ pic03 } alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
        </div>
        <ul class="actions">
            <li><a href="#" className="button">More</a></li>
        </ul>
    </section>
);

export default Featured;