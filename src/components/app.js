import React, { Component } from "react";
import SearchBar from "./searchBar";
import WeatherList from "./weatherList";

// The entire base of our app
export default class App extends Component {
  refreshPage() {
    window.location.reload();
  }
  render() {
    return (
      <div>
        <h1>
          <button onClick={this.refreshPage}>Weather App</button>
        </h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
