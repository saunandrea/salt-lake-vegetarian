import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as SearchAPI from './SearchAPI'

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

    state = { boltcutterLat: 0, boltcutterLng: 0 }


    testFetch() {
        let geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'address': '57 E Gallivan Ave, Salt Lake City, UT 84111' }, (results, status) => {
            if (status === 'OK') {
                // resultsGeo = results;
                console.log(results);
                this.setState({
                    boltcutterLat: results[0].geometry.location.lat(),
                    boltcutterLng: results[0].geometry.location.lng()
                });

            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    render() {
        let key = SearchAPI.googleMapsAPIKey;
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    geometryLibrary={true}
                    onGoogleApiLoaded={({ map, maps }) => {
                        // myMap = map;
                        // googleMapsApi = maps;
                        // console.log(googleMapsApi);
                        console.log(this.testFetch());
                    }}
                // yesIWantToUseGoogleMapApiInternals
                >
                    <AnyReactComponent
                        lat={this.state.boltcutterLat}
                        lng={this.state.boltcutterLng}
                        text={'X'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MainMap;