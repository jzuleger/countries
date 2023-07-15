// import './CountryList.css';

import { Link } from 'react-router-dom';

function CountryList({ countries, onCountrySelected }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          <Link to={`/country/${country.cca2}`}>{country.name.common}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
