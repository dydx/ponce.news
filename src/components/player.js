import React from 'react';
import pic11 from '../images/pic11.jpg';

import ReactHLS from 'react-hls';

const Player = () => (
    <section>
        <span className="image main">
            <ReactHLS
                url={ "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" }
                width={ "100%" }
                height={ "600px" }
                controls={ false }
                autoplay={ true }
                />
        </span>

        <hr className="major" />

        <h2>PNN Live Broadcast</h2>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
    </section>
);

export default Player;