import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

const getWeatherData = async (coordinates) => {
  const promiseArray = coordinates.map((c) =>
    axios.get(`getData/${c.lat}&${c.lon}`)
  );
  return await Promise.all(promiseArray);
};

const weatherService = { getWeatherData };

export default weatherService;
