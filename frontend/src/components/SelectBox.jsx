import React from "react";

const SelectBox = ({ props }) => {
  const changeCity = (e) => {
    e.preventDefault();
    props.setSelectedCity(e.target.value);
  };

  return (
    <select
      name="cities"
      id="cities"
      onChange={changeCity}
      className="p-4 rounded border-2"
    >
      <option value="all">All cities</option>
      {props.cities.map((city) => (
        <option key={city} value={city.toLowerCase().replaceAll("ä", "a")}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
