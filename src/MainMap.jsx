import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as SearchAPI from './SearchAPI'
import locations from "./locations"

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// let myMap;
// let googleMapsApi;
// let resultsGeo;
class MainMap extends Component {

    static defaultProps = {
        center: {
            lat: 40.7589138,
            lng: -111.8989378
        },
        zoom: 13
    };

    render() {
        let key = SearchAPI.googleMapsAPIKey;
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {locations.map((loc, i) => (
                        <AnyReactComponent key={i}
                            lat={loc.pos.lat}
                            lng={loc.pos.lng}
                            text={loc.name}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MainMap;