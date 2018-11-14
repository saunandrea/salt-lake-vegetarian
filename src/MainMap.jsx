import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as SearchAPI from './SearchAPI'
import MapMarker from './MapMarker'

class MainMap extends Component {

    static defaultProps = {
        center: {
            lat: 40.7589138,
            lng: -111.8989378
        },
        zoom: 13,
        locations: []
    };

    _onChildClick = (key, childProps) => {
        // ONLY WORKS WHEN CLICKING THE LEFT EDGE OF THE CABBAGE
        this.props.selectLocation(childProps.loc);

    }

    render() {
        let key = SearchAPI.googleMapsAPIKey;
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    center={this.props.center}
                    defaultZoom={this.props.zoom}
                    onChildClick={this._onChildClick}>
                    {this.props.locations.map((loc) => (
                        <MapMarker key={loc.vegId}
                            lat={loc.pos.lat}
                            lng={loc.pos.lng}
                            loc={loc}
                            onClick={this.props.selectLocation.bind(this, loc)}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MainMap;
