import React, { Component } from 'react';
import cabbageImg from './cabbageMedium.png'
import cabbagePurpleImg from './cabbagePurple.png'

class MapMarker extends Component {

    static defaultProps = {
    };

    render() {
        let loc = this.props.loc;

        return (
            // Note to reviewer: I could not find anything in the library to notify the map of onClick from the marker
            // thus it didn't make sense to have it tab indexed, the library just compares lat/long of clicks on map
            //<button className="removeStyling">
            <img src={loc.isSelected ? cabbagePurpleImg : cabbageImg} alt={"Marker for Location of " + loc.name} height="50px" />
            // </button>
        );
    }
}

export default MapMarker;