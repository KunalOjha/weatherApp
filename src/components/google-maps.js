import React, { Component } from 'react';
import styled from 'styled-components';
// import {GoogleMapLoader, GoogleMap} from 'react-google-maps';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 8,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div style={{"height" : "100px", "width" : "200px", "border": "1px solid black"}} ref="map"></div>
    }
}

export default GoogleMap;