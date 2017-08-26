import React, { Component } from 'react';
import getWeatherByCityName from '../api/getTempByCityName';
import { connect } from 'react-redux';

class WeatherForm extends Component {
    getWeather() {
        const { txtCityName } = this.refs;
        const cityName = txtCityName.value;
        const { dispatch } = this.props;
        dispatch({ type: 'BAT_DAU_TIM_KIEM' });
        getWeatherByCityName(cityName)
        .then(temp => dispatch({ type: 'TIM_KIEM_THANH_CONG', cityName, temp}))
        .catch(error => dispatch({ type: 'TIM_KIEM_THAT_BAI', error }));
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

export default connect()(WeatherForm);
