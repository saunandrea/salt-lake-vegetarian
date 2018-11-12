import React, { Component } from 'react';

class SidePane extends Component {
    render() {
        return (

            <div>
                <h1>Helping you find the best vegetarian in SLC</h1>
                <input placeholder="Filter Options"></input>
                <ul>
                    <li>Boltcutter</li>
                    <li>Zest</li>
                    <li>Bud's</li>
                    <li>All Chay</li>
                    <li>Season's Plant Based Bistro</li>
                </ul>
            </div>
        );
    }
}

export default SidePane;