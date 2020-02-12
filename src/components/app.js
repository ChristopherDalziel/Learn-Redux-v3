import React, { Component } from "react";
import SearchBar from "./searchBar";
import WeatherList from "./weatherList";

// The entire base of our app
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
