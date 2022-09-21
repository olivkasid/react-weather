import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDayForecast(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay()

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"]

      return days[day]
  }

  return (
    <div className="WeatherDayForecast">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max-temperature">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-min-temperature">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
