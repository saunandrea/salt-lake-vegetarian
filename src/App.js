import React, { Component } from 'react';
import MainMap from './MainMap'
import SidePane from './SidePane'
import './App.css';
import locations from "./locations"
import * as SearchAPI from './SearchAPI';

class App extends Component {
  locationsWithSelect = locations.map((obj) => {
    obj.isSelected = false;
    return obj;
  })

  state = {
    mapCenter: {
      lat: 40.7589138,
      lng: -111.8989378
    },
    zoom: 13,
    locationsAll: this.locationsWithSelect,
    locationsFiltered: this.locationsWithSelect,
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

  handleChange_filter = (term) => {
    let termUpper = term.trim().toUpperCase();
    let locationsFiltered = (termUpper.length === 0) ? this.state.locationsAll :
      this.state.locationsAll.filter(loc => loc.name.toUpperCase().includes(termUpper));
    this.setState({ locationsFiltered })
  };

  selectLocation = (selected) => {
    let updatedList = this.state.locationsFiltered.map(loc => {
      loc.isSelected = (loc.vegId === selected.vegId);
      return loc;
    });
    this.loadShortDescription(selected.vegId);
    this.setState({
      locationsFiltered: updatedList,
      mapCenter: {
        lat: selected.pos.lat,
        lng: selected.pos.lng
      }
    })
  }

  render() {
    return (
      <div className="mainFrame">
        <SidePane locations={this.state.locationsFiltered} onUpdate={this.handleChange_filter} selectLocation={this.selectLocation} shortDescriptions={this.state.shortDescriptions}></SidePane>
        <MainMap center={this.state.mapCenter} zoom={this.state.zoom} locations={this.state.locationsFiltered} selectLocation={this.selectLocation}></MainMap>
      </div>
    );
  }
}

export default App;
