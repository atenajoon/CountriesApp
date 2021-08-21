const CountriesInput = ({ onChange, value }) => {
  return (
    <div>
      <label htmlFor="country">Choose Country: </label>
      <input id="country" onChange={onChange} value={value} />
      <h3>{value}</h3>
    </div>
  );
};

export default CountriesInput;
