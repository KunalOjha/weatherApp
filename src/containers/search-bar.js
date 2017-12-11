import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component { 
    constructor(props) {
        super(props);

        this.state = {term: ''};

    //this.onInputChange = this.onInputChage.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

onInputChage(event) {
    this.setState({term: event.target.value});
}
onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''})
}

    render() {
        return (
            <form 
                className="input-group"
                onSubmit={this.onFormSubmit}>
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast for your favorite cities"
                    value={this.state.term}
                    onChange= {event=>this.onInputChage(event)}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// This funciton will map all functions on Dispatch to the container's props object.
// We need to include this function whenever we want to use an action creator
function mapDispatchToProps(dispatch) {
    //makes sure action flows down into middleware, then reducers inside of redux
    //bind action creators to dispatch object
    return bindActionCreators({fetchWeather}, dispatch);
};

//the connect function is the final piece that connects our state and dispatch (action creators) objects to
// the component/container's props object.
export default connect(null, mapDispatchToProps)(SearchBar);