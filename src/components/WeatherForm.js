import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your city name"/>
                <br /><br />
                <button>Get Weather</button>
            </div>
        );
    }
}
