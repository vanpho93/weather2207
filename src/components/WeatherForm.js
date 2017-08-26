import React, { Component } from 'react';
import getWeatherByCityName from '../api/getTempByCityName';
import * as actionCreators from '../redux/action';

import { connect } from 'react-redux';

class WeatherForm extends Component {
    getWeather() {
        const { txtCityName } = this.refs;
        const cityName = txtCityName.value;
        const { batDauTimKiem, timKiemThanhCong, timKiemThatBai } = this.props;
        batDauTimKiem();
        getWeatherByCityName(cityName)
        .then(temp => timKiemThanhCong(cityName, temp))
        .catch(error => timKiemThatBai(error));
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your city name" ref="txtCityName"/>
                <br /><br />
                <button onClick={this.getWeather.bind(this)}>Get Weather</button>
            </div>
        );
    }
}

export default connect(null, actionCreators)(WeatherForm);
