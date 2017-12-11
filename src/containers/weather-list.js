import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

    renderWeather() {
        return this.props.weather.map(item=> {
           return (
            <tr>
                <td>
                    {item.name}
                </td>
             </tr>
            )}
        )};

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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




