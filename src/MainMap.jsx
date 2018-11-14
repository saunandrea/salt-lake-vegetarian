import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as SearchAPI from './SearchAPI'
import MapMarker from './MapMarker'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
        //  warning/ todo: ONLY WORKS WHEN CLICKING THE LEFT EDGE OF THE CABBAGE
        this.props.selectLocation(childProps.loc);

    }

    render() {
        let key = SearchAPI.googleMapsAPIKey;
        console.log(this.props.locationsAll);
        return (
            // Important! Always set the container height explicitly
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

// <AnyReactComponent key={i}
// lat={loc.pos.lat}
// lng={loc.pos.lng}
// text={loc.name}
// />