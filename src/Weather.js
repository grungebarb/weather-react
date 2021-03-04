import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    //alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
  }
  let apiKey = "b89a2bda363f782379e90e985a8aa5e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2>Hello from Weather</h2>
      <Loader
        type="Puff"
        color="white"
        height={100}
        width={100}
        timeout={3000}secs
      />
    </div>
    );
}