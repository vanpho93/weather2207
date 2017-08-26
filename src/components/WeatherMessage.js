import React, { Component } from 'react';
import { connect} from 'react-redux';

class WeatherMessage extends Component {
    render() {
        const { cityName, temp, isLoading, error } = this.props;
        let message = 'Enter your city name';
        if (cityName) message = `${cityName} is now ${temp}`;
        if (error) message = 'Cannot find your city';
        if (isLoading) message = 'Loading...';
        return <h3>{message}</h3>;
    }
}

const mapStateToProps = (state) => ({
    cityName: state.cityName,
    temp: state.temp,
    isLoading: state.isLoading,
    error: state.error
});

export default connect(mapStateToProps)(WeatherMessage);
