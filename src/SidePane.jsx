import React, { Component } from 'react';


class SidePane extends Component {
    state = {
        searchTerm: '',
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
        this.props.selectLocation(loc);
    }

    render() {
        return (
            <nav role="navigation" className="sidePane">
                <h1>Veggies in SLC</h1>
                <input aria-label="Filter Options" type="text" placeholder="Filter Options" value={this.state.searchTerm} onChange={this.handleChange}></input>
                {this.props.locations ?
                    <ul className="options">
                        {this.props.locations.map((loc, i) =>
                            <li key={i}>
                                <button onClick={() => this.handleClick(loc)} className={loc.isSelected ? "isSelected" : ""}>{loc.name}</button>
                                <div>{loc.isSelected && this.props.shortDescriptions[loc.vegId]}</div>
                            </li>)}
                    </ul>
                    :
                    <div>
                        loading...
                    </div>
                }
            </nav>
        );
    }
}

export default SidePane;