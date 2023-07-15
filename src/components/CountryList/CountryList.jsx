// import './CountryList.css';

import Button from '../Button/Button';

function CountryList({ countries, onCountrySelected }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          <Button
            label={country.name.common}
            onClick={(text) => onCountrySelected(text)}
          />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
