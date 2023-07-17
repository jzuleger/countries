import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Heading,
  Tag,
  TagLabel,
  TagCloseButton,
  Stack
} from '@chakra-ui/react';

import './Overview.css';

import CountryList from './components/CountryList/CountryList';
import Filter from '../../components/Filter/Filter';

import {
  useCountries,
  useRegions,
  useSubregions,
  useLanguages
} from '../../services/countries/countries';

const useFilters = () => {
  const [filter, setFilter] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('region')) {
      setFilter({ type: 'region', value: searchParams.get('region') });
    } else if (searchParams.has('subregion')) {
      setFilter({ type: 'subregion', value: searchParams.get('subregion') });
    } else if (searchParams.has('language')) {
      setFilter({ type: 'lang', value: searchParams.get('language') });
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
  const subregions = useSubregions();
  const languages = useLanguages();
  const navigate = useNavigate();

  const handleFilter = (type, value) =>
    navigate({
      pathname: '/',
      search: `?${type}=${value}`
    });

  return (
    <article className="overview">
      <header className="overview__header">
        <Heading as="h1" size="2xl">
          Countries
        </Heading>
      </header>

      <Stack spacing={2}>
        <Heading as="h2" size="md">
          Filters
        </Heading>

        {!filter && (
          <>
            <Filter
              type="region"
              options={regions}
              onSelect={(value) => {
                handleFilter('region', value);
              }}
            />

            <Filter
              type="subregion"
              options={subregions}
              onSelect={(value) => {
                handleFilter('subregion', value);
              }}
            />

            <Filter
              type="language"
              options={languages}
              onSelect={(value) => {
                handleFilter('language', value);
              }}
            />
          </>
        )}

        {filter && (
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="gray">
            <TagLabel>{filter.value}</TagLabel>
            <TagCloseButton onClick={() => navigate('/')} />
          </Tag>
        )}
      </Stack>

      <div className="overview__list">
        <Stack spacing={2}>
          <Heading as="h2" size="md">
            Results
          </Heading>

          {countries && <CountryList countries={countries} />}
        </Stack>
      </div>
    </article>
  );
}

export default Overview;
