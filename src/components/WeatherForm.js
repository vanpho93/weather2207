import React, { Component } from 'react';
import getWeatherByCityName from '../api/getTempByCityName';
import * as actionCreators from '../redux/action';

import { connect } from 'react-redux';

class WeatherForm extends Component {
    onSubmitForm(e) {
        e.preventDefault();
        const { getWeather } = this.props;
        getWeather(this.refs.txtCityName.value)
    }
    render() {
        const { getWeather } = this.props;
        return (
            <form onSubmit={this.onSubmitForm.bind(this)}>
                <input type="text" placeholder="Enter your city name" ref="txtCityName"/>
                <br /><br />
                <button onClick={() => getWeather(this.refs.txtCityName.value)}>
                    Get Weather
                </button>
            </form>
        );
    }
}

export default connect(null, actionCreators)(WeatherForm);
