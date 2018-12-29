import PropTypes from 'prop-types';
import React from 'react';

import ArticleCard from './article_card'
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import pic04 from '../images/pic04.jpg';
import pic05 from '../images/pic05.jpg';

const articles = [
    {
        title: "Midterm Election Results",
        description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
        image: pic01
    },
    {
        title: "Flooding Causes Road Closures",
        description: "Aenean orn2re velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
        image: pic02
    },
    {
        title: "Man climbs North Avenue crane",
        description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
        image: pic02
    },
    {
        title: "Midterm Elections Coming Up",
        description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
        image: pic03
    },
    {
        title: "What happened to the water?",
        description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
        image: pic04
    },
    {
        title: "Accident involving MARTA bus and automobile",
        description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
        image: pic05
    }
]

const Articles = () => (
    <section>
        <header class="major">
            <h2>Recent Stories</h2>
        </header>
        <div class="posts">
        { articles.map(article => <ArticleCard title={article.title} description={article.description} image={article.image} />)}
        </div>
    </section>
)

Articles.propTypes = {
  siteTitle: PropTypes.string,
}

Articles.defaultProps = {
  siteTitle: ``,
}

export default Articles;
