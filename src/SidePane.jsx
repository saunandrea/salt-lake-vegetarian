import React, { Component } from 'react';

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

    render() {
        return (

            <div>
                <h1>Vegetarian Eats in SLC</h1>
                <input type="text" placeholder="Filter Options" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <ul>
                    {this.props.locations ?
                        this.props.locations.map((loc, i) => (
                            <li key={i}>{loc.name}</li>
                        )) : <div>
                            loading...
                    </div>}
                </ul>
            </div>
        );
    }
}

export default SidePane;