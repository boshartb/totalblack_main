import React, { Component } from 'react';

import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div id="home-here">
                <img className="logo" src='https://assets.bigcartel.com/theme_images/40642636/logo_forweb_100K.jpg?auto=format&fit=max&h=500&w=1800' alt="logo" />
                <div className="home-link">
                    <a href="https://soundcloud.com/totalblack">SAMPLE</a>{' '}
                    <a href="http://totalblack.bigcartel.com">STORE</a>{' '}
                    <a href="http://totalblack.bandcamp.com/">DIGITAL</a>
                </div>
            </div>
        );
    }
}

export default Home;