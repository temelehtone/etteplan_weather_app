import React from "react";

const Cityinfo = () => {
  return (
    <div className=" mt-100 p-5 border-2 bg-white border-l-gray-border rounded-md grid grid-cols-2 grid-rows-2 gap-10">
      <div className="">
        <h3 className="">Espoo</h3>
        <span className="text-sm text-gray-text">Scattered clouds</span>
      </div>
      <div className="mt-100 flex gap-2 justify-end">
        <h3 className="">IMG</h3>
        <span className="">0 C</span>
      </div>

      <div className="">
        <h3 className="">May 2nd</h3>
        <span className="text-sm text-gray-text">11:54</span>
      </div>
      <div className="mt-100 text-end ">
        <p className="text-sm text-gray-text">Wind: 5.1 m/s</p>
        <p className="text-sm text-gray-text">Humidity: 86 %</p>
        <p className="text-sm text-gray-text">Precipitation (3h): 5 mm</p>
      </div>
    </div>
  );
};

export default Cityinfo;
