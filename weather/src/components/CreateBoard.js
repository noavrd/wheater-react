import React, { Component } from "react";
import EachWeather from "./EachWeather";

export default class CreateBoard extends Component  { 
    render() {
        return (
        <span className="total">
            {this.props.weather.map((weather, i) => (
                <EachWeather
                    key={`eachWeather-${i}`}
                    day={weather.day}
                    minTemperature={weather.minTemperature}
                    maxTemperature={weather.maxTemperature}
                    type={weather.type}
                />
            ))}
        </span>
        );
    }
}


