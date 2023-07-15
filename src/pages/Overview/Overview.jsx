import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// import './Overview.css';

// import Button from '../../components/Button/Button';
import CountryList from './components/CountryList/CountryList';

import { useCountries, useRegions } from '../../services/countries/countries';

const useFilters = () => {
  const [filter, setFilter] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('region')) {
      setFilter({ type: 'region', value: searchParams.get('region') });
    } else if (searchParams.has('subregion')) {
      setFilter({ type: 'subregion', value: searchParams.get('subregion') });
    } else {
      setFilter(false);
    }
  }, [searchParams]);

  return filter;
};

function Overview() {
  const filter = useFilters(false);
  const countries = useCountries(filter);
  const regions = useRegions();

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <article className="overview">
      <header>
        <h1>Countries Overview</h1>
      </header>

      <h2>Filter</h2>
      <ul>
        {regions?.map((region) => (
          <li key={`region-${region}`}>
            <Link
              to={{
                pathname: '/',
                search: `?region=${region}`
              }}
            >
              {region}
            </Link>
          </li>
        ))}
      </ul>

      {filter && (
        <Link
          to={{
            pathname: '/',
            search: ''
          }}
        >
          Reset filters
        </Link>
      )}

      <h2>List</h2>
      {countries && <CountryList countries={countries} />}
    </article>
  );
}

export default Overview;
