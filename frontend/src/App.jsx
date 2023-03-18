import { useEffect, useState } from "react";
import weatherService from "./api";
import helper from "./utils/helper";
import Header from "./components/Header";

import SelectBox from "./components/SelectBox";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("all");

  useEffect(() => {
    weatherService.getWeatherData(helper.coordinates).then((data) => {
      console.log(data);

      setWeatherData(data.map((d) => d.data));
    });
  }, []);
  return (
    <div className="App mb-6">
      <Header />
      <div className="flex min-h-full gap-4 align-center flex-col justify-center px-6">
        <SelectBox props={{ cities: helper.cities, setSelectedCity }} />
        {weatherData.map((data) => {
          if (selectedCity !== "all" && selectedCity !== data.city.name.toLowerCase()) return;
          return <WeatherComponent data={data} key={data.city.id} />

        })}
      </div>
    </div>
  );
}

export default App;
