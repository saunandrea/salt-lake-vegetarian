import React, { Component } from 'react';
import * as SearchAPI from './SearchAPI'
import cabbageImg from './cabbageMedium.png'
import cabbagePurpleImg from './cabbagePurple.png'

class MapMarker extends Component {

    static defaultProps = {
    };

    render() {
        let loc = this.props.loc;

        return (
            <div>
                <img src={loc.isSelected ? cabbagePurpleImg : cabbageImg} alt={"Marker for Location of " + loc.name} height="50px" />
            </div>
        );
    }
}

export default MapMarker;