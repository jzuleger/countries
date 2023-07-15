import Button from '../../components/Button/Button';
import CountryList from '../../components/CountryList/CountryList';
// import './Overview.css';

import { useCountries, useRegions } from '../../services/countries/countries';

function Overview({ onCountrySelected }) {
  const countries = useCountries();
  const regions = useRegions();

  return (
    <article className="overview">
      <header>
        <h1>Countries Overview</h1>
      </header>

      <ul>
        {regions?.map((region) => (
          <li key={`region-${region}`}>
            <Button label={region} onClick={(text) => console.log(text)} />
          </li>
        ))}
      </ul>

      {countries?.length > 0 && (
        <CountryList
          countries={countries}
          onCountrySelected={onCountrySelected}
        />
      )}
    </article>
  );
}

export default Overview;
