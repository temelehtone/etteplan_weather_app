import axios from "axios";
const baseUrl =
  axios.baseUrl !== "http://localhost:3000" ? "http://localhost:3001/" : "/";
axios.defaults.baseURL = baseUrl;

const getWeatherData = async (coordinates) => {
  const promiseArray = coordinates.map((c) =>
    axios.get(`getData/${c.lat}&${c.lon}`)
  );
  return await Promise.all(promiseArray);
};

const weatherService = { getWeatherData };

export default weatherService;
