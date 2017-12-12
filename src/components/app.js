import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';


export default class App extends Component {
  render() {
    return (
      <div>
        <br/>
          <h1>Weather Patterns</h1>
          <SearchBar/>
          <WeatherList/>
      </div>
    );
  }
}