import React from "react";

const WeatherCard = ({data}) => {
  return (
    
    <div className="border-2 text-center bg-white border-l-gray-border rounded-md">
      <div className=" p-4">
        <p className="text-gray-text text-base">15:00</p>
        <p className="text-gray-text text-base">IMG</p>
        <p className="text-gray-text text-xl">-1 C</p>
      </div>
      <div className=" bg-bg-light-blue px-4 py-2">
        <p className="text-gray-text text-sm">2.1 m/s</p>
        <p className="text-gray-text text-sm">5 %</p>
        <p className="text-gray-text text-sm">1 mm</p>
      </div>
    </div>
  );
};

export default WeatherCard;
