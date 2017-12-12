import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts'
import _ from 'lodash';
import GoogleMap from '../components/google-maps';

class WeatherList extends Component {

    renderWeather() {
        return this.props.weather.map(item=> {
           const city = item.city.name;
           const temps= _.map(item.list.map(weather=>weather.main.temp), (temp)=> (1.8*(temp-273)+32));
           const humidity= item.list.map(weather=>weather.main.humidity);
           const pressure= item.list.map(weather=>weather.main.pressure);
           const {lon, lat} = item.city.coord;

           return (
            <tr key={city}>
                <td>{city}</td>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart weatherMetric={temps} color="blue" units="&#8457;"/></td>
                <td><Chart weatherMetric={humidity} color="orange" units="%"/></td>
                <td><Chart weatherMetric={pressure} color="green" units="hPA"/></td>
             </tr>
            )}
        )};

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Map</th>
                        <th>Temperature (&#8457;)</th>
                        <th>Humidity (%)</th>
                        <th>Pressure (hPa)</th>
                    </tr>
                </thead>
                <tbody>
                        {this.renderWeather()}
                </tbody>
            </table>
        )
    }
};

function mapStateToProps({weather}) { // ({weather})  weather = state.weather
    return {weather}; // {weather} === {weather: weather}
};

export default connect(mapStateToProps)(WeatherList);