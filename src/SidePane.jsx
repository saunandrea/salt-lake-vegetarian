import React, { Component } from 'react';
import * as SearchAPI from './SearchAPI';

class SidePane extends Component {
    state = {
        searchTerm: '',
        shortDescription: ''
    };

    componentDidMount() {
        let selected = this.props.locations.find(loc => loc.isSelected);
        if (selected) { this.loadShortDescription(selected.vegId); }
    }

    componentWillReceiveProps(nextProps) {
        let selected = nextProps.locations.find(loc => loc.isSelected);
        if (selected) { this.loadShortDescription(selected.vegId); }
    }

    componentDidUpdate() {
        let selected = this.props.locations.find(loc => loc.isSelected);
        if (selected) { this.loadShortDescription(selected.vegId); }
    }

    loadShortDescription = (id = 20743) => {
        SearchAPI.getShortDescription(id).then(shortDescription =>
            this.setState({ shortDescription }))
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
                                <li><button onClick={() => this.handleClick(loc)}>{loc.name}</button></li>
                                {loc.isSelected && this.state.shortDescription}
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