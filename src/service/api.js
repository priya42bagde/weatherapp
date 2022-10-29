import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getData = async (city, country) => {
  return await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
};
