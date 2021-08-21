const CountriesInput = ({ onChange, value }) => {
  const countries = [
    { id: 1, name: "Iran" },
    { id: 2, name: "Canada" },
  ];

  return (
    <div>
      {console.log(countries)}
      <label htmlFor="country">Choose Country: </label>
      <input id="country" onChange={onChange} value={value} />
      <h3>{value}</h3>
    </div>
  );
};

export default CountriesInput;
