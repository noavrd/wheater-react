import './App.css';
import React from "react";
import CreateBoard from './components/CreateBoard';

import rainy from "./pictures/rainy.png";
import cloudy from "./pictures/cloudy.png";
import wind from "./pictures/wind.png";
import sunny from "./pictures/sunny.png";

const weather = [
  { day: "Sunday", minTemperature: 12, maxTemperature: 20, type: cloudy },
  { day: "Monday", minTemperature: 11, maxTemperature: 18, type: wind },
  { day: "Tuesday", minTemperature: 24, maxTemperature: 30, type: sunny },
  { day: "Wendsday", minTemperature: 35, maxTemperature: 40, type: sunny },
  { day: "Thursday", minTemperature: 20, maxTemperature: 28, type: cloudy },
  { day: "Friday", minTemperature: 17, maxTemperature: 24, type: wind },
  { day: "Saturday", minTemperature: 9, maxTemperature: 17, type: rainy }
]


function App() {
  return <CreateBoard weather={weather}/>
  
}

export default App;
