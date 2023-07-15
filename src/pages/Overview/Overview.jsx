import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Heading,
  Tag,
  TagLabel,
  TagCloseButton,
  Stack,
  Select
} from '@chakra-ui/react';

import './Overview.css';

// import Button from '../../components/Button/Button';
import CountryList from './components/CountryList/CountryList';

import {
  useCountries,
  useRegions,
  useSubregions
} from '../../services/countries/countries';

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
  const subregions = useSubregions();
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
          Countries Overview
        </Heading>
      </header>

      <Stack spacing={2}>
        <Heading as="h2" size="md">
          Filter
        </Heading>

        {!filter && (
          <>
            <Select
              variant="flushed"
              placeholder="Choose a region"
              onChange={(ev) => {
                handleFilter('region', ev.target.value);
              }}
            >
              {regions?.map((region) => (
                <option key={`region-${region}`} value={region}>
                  {region}{' '}
                </option>
              ))}
            </Select>

            <Select
              variant="flushed"
              placeholder="Choose a subregion"
              onChange={(ev) => {
                handleFilter('subregion', ev.target.value);
              }}
            >
              {subregions?.map((subregion) => (
                <option key={`subregion-${subregion}`} value={subregion}>
                  {subregion}{' '}
                </option>
              ))}
            </Select>
          </>
        )}

        {filter && (
          <Tag borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Reset: {filter.value}</TagLabel>
            <TagCloseButton onClick={() => navigate('/')} />
          </Tag>
        )}
      </Stack>

      <div className="overview__list">
        <Stack spacing={2}>
          <Heading as="h2" size="md">
            List
          </Heading>

          {countries && <CountryList countries={countries} />}
        </Stack>
      </div>
    </article>
  );
}

export default Overview;
