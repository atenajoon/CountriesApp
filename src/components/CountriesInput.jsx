const CountriesInput = ({ onChange, value }) => {
  const countries = [
    { id: 1, name: "Iran" },
    { id: 2, name: "Canada" },
  ];

  const cities = [
    { id: 1, countryId: 1, name: "Isfahan" },
    { id: 2, countryId: 1, name: "Tehran" },
    { id: 3, countryId: 2, name: "Vancouver" },
    { id: 4, countryId: 2, name: "Toronto" },
  ];

  return (
    <div>
      {console.log(countries)}
      {console.log(cities)}
      <label htmlFor="country">Choose Country: </label>
      <input id="country" onChange={onChange} value={value} />
      <h3>{value}</h3>
    </div>
  );
};

export default CountriesInput;
