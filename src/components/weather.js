import React from 'react';
import DarkskyMap from './darkSky';

const Weather = () => (
    <section id="banner">
        <div className="content">
            <header>
                <h1>Current Weather</h1>
            </header>

        <DarkskyMap
            lat={33.773770}
            lng={-84.363140}
            zoom={11}
            mapField="precip"
            url="https://ponce.news"
            apiKey="809db80d2943fee8205b3e342e0879be"/>
        </div>
    </section>
);

export default Weather;