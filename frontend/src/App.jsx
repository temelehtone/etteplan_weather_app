import { useEffect, useState } from "react";
import weatherService from "./api";
import coordinates from "./utils/coordinates";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    weatherService
      .getWeatherData(coordinates.tampere.lat, coordinates.tampere.lon)
      .then((data) => console.log(data));
  }, []);
  return <div className="App bg-body-bg">
      <Header />
    </div>;
}

export default App;
