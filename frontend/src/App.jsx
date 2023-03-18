import { useEffect, useState } from "react";
import weatherService from "./api";
import coordinates from "./utils/coordinates";
import Header from "./components/Header";
import Cityinfo from "./components/Cityinfo";
import SelectBox from "./components/SelectBox";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    weatherService
      .getWeatherData(coordinates.tampere.lat, coordinates.tampere.lon)
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App flex min-h-full align-center flex-col justify-center px-6">
      <Header />
      <SelectBox />
      <Cityinfo />
    </div>
  );
}

export default App;
