import PropTypes from 'prop-types';
import React from 'react';

const ArticleCard = ({ title, description, image }) => (
    <article>
        <a href="#" className="image"><img src={ image } alt="" /></a>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <ul class="actions">
            <li><a href="#" className="button">More</a></li>
        </ul> 
    </article>
);

ArticleCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}
  
ArticleCard.defaultProps = {
    title: ``,
    description: ``,
    image: ``,
}
  
export default ArticleCard;