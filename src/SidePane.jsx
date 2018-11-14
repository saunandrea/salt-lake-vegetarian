import React, { Component } from 'react';
import * as SearchAPI from './SearchAPI';

class SidePane extends Component {
    state = {
        searchTerm: '',
        shortDescriptions: {}
    };

    loadShortDescription = (vegId) => {
        if (this.state.shortDescriptions[vegId]) return;

        SearchAPI.getShortDescription(vegId).then(description =>
            this.setState((currentState) => ({
                shortDescriptions: {
                    ...currentState.shortDescriptions,
                    [vegId]: description,
                },
            }))
        )
    }

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
        this.props.selectLocation(loc);
        this.loadShortDescription(loc.vegId);
    }

    render() {
        return (
            <div className="sidePane">
                <h1>Veggies in SLC</h1>
                <input type="text" placeholder="Filter Options" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <ul className="options">
                    {this.props.locations ?
                        this.props.locations.map((loc, i) => (
                            <div key={i}>
                                <li><button onClick={() => this.handleClick(loc)} className={loc.isSelected ? "isSelected" : ""}>{loc.name}</button></li>
                                {loc.isSelected && this.state.shortDescriptions[loc.vegId]}
                                <p></p>
                            </div>
                        )) : <div>
                            loading...
                    </div>}
                </ul>
            </div>
        );
    }
}

export default SidePane;