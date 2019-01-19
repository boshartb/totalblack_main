import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Link to="/">Home</Link>{' '}
                <Link to="/events">Events</Link>{' '}
                <Link to="/releases">Releases</Link>{' '}
            </div>
        );
    }
}

export default NavBar;