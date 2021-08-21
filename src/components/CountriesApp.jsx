import { useState, useEffect } from "react";

const CountriesApp = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <label htmlFor="country">Choose Country: </label>
      <input id="country" onChange={handleChange} value={value} />
      <h3>{value}</h3>
    </div>
  );
};

export default CountriesApp;
