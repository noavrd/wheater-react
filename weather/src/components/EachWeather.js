import React, { Component } from "react";

export default class EachWeather extends Component {
    render() {
        return (
            <span className="day">
                <h1>{this.props.day}</h1>
                <img src={this.props.type} alt="weather"></img>
                <span className="temp">{this.props.minTemperature}  -  {this.props.maxTemperature}</span>
            </span>
        )
    }
}

// function picture() {
//     for (let i = 0; i < picturesArray; i++) {
//         if()
//     }
// }