import React, { Component } from 'react';



class AlbumCard extends Component {
    render() {
        return (
            <div>
                {/* <img src={this.props.release.resource_url} ></img> */}
                <h3>{this.props.release.resource_url}</h3>
                <h3>{this.props.release.artist}</h3>
                <h3>{this.props.release.title}</h3>
                <h3>{this.props.release.year}</h3>
                <h3>{this.props.release.catno}</h3>


            </div>
        );
    }
}

export default AlbumCard