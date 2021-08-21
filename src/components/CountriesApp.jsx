import { useState, useEffect } from "react";
import CountriesInput from "./CountriesInput";

const CountriesApp = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <CountriesInput onChange={handleChange} value={value} />
    </div>
  );
};

export default CountriesApp;
