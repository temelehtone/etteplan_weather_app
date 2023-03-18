import { useEffect, useState } from "react";
import weatherService from "./api";
import helper from "./utils/helper";
import Header from "./components/Header";
import Cityinfo from "./components/Cityinfo";
import SelectBox from "./components/SelectBox";
import WeatherCardWrapper from "./components/WeatherCardWrapper";

function App() {
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("all");

  useEffect(() => {
    weatherService
      .getWeatherData(
        helper.coordinates.tampere.lat,
        helper.coordinates.tampere.lon
      )
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
        <Header />
      <div className="flex min-h-full gap-4 align-center flex-col justify-center px-6">
        <SelectBox props={{ cities: helper.cities, setSelectedCity }} />
        <Cityinfo />
        <WeatherCardWrapper />
      </div>
    </div>
  );
}

export default App;
