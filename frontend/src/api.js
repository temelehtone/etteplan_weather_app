import axios from "axios";
const baseUrl = axios.baseUrl !== "http://localhost:3000" ? "http://localhost:3001/" : "/";
axios.defaults.baseURL = baseUrl


const getWeatherData = async (lat, lon) => {

  const request = axios.get(`getData/${lat}&${lon}`);
  const response = await request;
  return response.data;
};



const weatherService = { getWeatherData };

export default weatherService;
