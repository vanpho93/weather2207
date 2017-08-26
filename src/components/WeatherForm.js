import React, { Component } from 'react';
import getWeatherByCityName from '../api/getTempByCityName';
import * as actionCreators from '../redux/action';

import { connect } from 'react-redux';

class WeatherForm extends Component {
    render() {
        const { getWeather } = this.props;
        return (
            <div>
                <input type="text" placeholder="Enter your city name" ref="txtCityName"/>
                <br /><br />
                <button onClick={() => getWeather(this.refs.txtCityName.value)}>
                    Get Weather
                </button>
            </div>
        );
    }
}

export default connect(null, actionCreators)(WeatherForm);
