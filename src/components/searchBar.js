import React, { Component } from "react";
import { connect } from "react-redux";

// Import ALL actions from the index.js inside the actions folder
import * as actions from "../actions";

// Create our search bar component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Set the state of term to an empty string
    this.state = { term: "" };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
        <input
          placeholder="Type any city to get a weather forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button id="searchButton" className="btn btn-secondary" type="submit">
            Go
          </button>
        </span>
      </form>
    );
  }
}

// We've imported 'connect' from react-redux this is a bind to the component with action creators, when we export a component using 'connect' we have access to reducers and actions.
export default connect(null, actions)(SearchBar);
