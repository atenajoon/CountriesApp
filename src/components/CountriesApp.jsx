import { useState, useEffect } from "react";

const CountriesApp = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    console.log("changing", value);
  };

  return (
    <div>
      <label htmlFor="country">Choose Country: </label>
      <input id="country" onChange={handleChange} value={value} />
    </div>
  );
};

export default CountriesApp;
