import React from "react";
import helper from "../utils/helper.js"

const Cityinfo = ({data}) => {
    const currentDate = new Date()
    const firstData = data.list[0];
    let precipiation;
    if(firstData.rain) {
        precipiation = firstData.rain["3h"]
    } else if(firstData.snow) {
        precipiation = firstData.snow["3h"]
    } 
    const imageUrl = `https://openweathermap.org/img/wn/${firstData.weather[0].icon}.png`
  return (
    <div className="p-4 border-2 bg-white border-l-gray-border rounded-md grid grid-cols-2 grid-rows-2 gap-5">
      <div className="">
        <p className="text-xl text-main-text">{data.city.name}</p>
        <p className="text-sm text-gray-text">{firstData.weather[0].main}</p>
      </div>
      <div className="mt-100 flex gap-2 justify-end">
        <img src={imageUrl} className="" />
        <p className="my-auto text-xl align-middle">{helper.temperatureConverter(firstData.main.temp)} °C</p>
      </div>

      <div className="">
        <p className="">{currentDate.toDateString()}</p>
        <p className="text-sm text-gray-text">{currentDate.getHours()}:{currentDate.getMinutes()}</p>
      </div>
      <div className="mt-100 text-end ">
        <p className="text-sm text-gray-text">Wind: {firstData.wind.speed} m/s</p>
        <p className="text-sm text-gray-text">Humidity: {firstData.main.humidity} %</p>
        {precipiation && <p className="text-sm text-gray-text">Precipitation (3h): {Math.round(precipiation)} mm</p>}
      </div>
    </div>
  );
};

export default Cityinfo;
