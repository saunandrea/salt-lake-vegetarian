import React, { Component } from 'react';
import * as SearchAPI from './SearchAPI';

class SidePane extends Component {
    state = {
        searchTerm: ''
    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value }, () => {
            if (this.iSearch) {
                clearTimeout(this.iSearch);
                this.iSearch = null;
            }

            this.iSearch = setTimeout(() => {
                this.props.onUpdate(this.state.searchTerm);
            }, 200);
        });
    }

    handleClick = (loc) => {
        console.log("checking click", SearchAPI.getTips(loc.fsId));
    }

    render() {
        return (

            <div className="sidePane">
                <h1>Vegetarian Eats in SLC</h1>
                <input type="text" placeholder="Filter Options" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <ul className="options">
                    {this.props.locations ?
                        this.props.locations.map((loc, i) => (
                            <li key={i}><button onClick={() => this.handleClick(loc)}>{loc.name}</button></li>
                        )) : <div>
                            loading...
                    </div>}
                </ul>
            </div>
        );
    }
}

export default SidePane;