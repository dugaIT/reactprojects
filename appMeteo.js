import React from "react";
import "./styles.css";

function dailyForecast(day, forecast, forecastShort) {
  const icon =
    "https://.metaweather.com/static/img/weather/" + forecastShort + ".svg";
  return (
    <div className="daily-forecast">
      <img src={icon} />

      <div className="day">{day}</div>
      <div>
        {forecast} <br />
        3°C/16°C
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>Meteo a Milano</h1>

      {dailyForecast("Domani", "Sole", "c")}
      {dailyForecast("30 Marzo", "pioggia", "lr")}
    </div>
  );
}
