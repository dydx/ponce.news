import React from 'react';
import DarkskyMap from 'react-darksky-map';

const Weather = () => (
    <section id="banner">
        <div className="content">
            <header>
                <h1>Current Weather</h1>
            </header>

        <DarkskyMap lat={33.773770} lng={-84.363140} zoom={11} mapField="precip" />
        </div>
    </section>
);

export default Weather;