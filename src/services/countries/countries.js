import { useEffect, useState } from 'react';

export const useCountries = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,cca2'
        );
        const json = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setCountries(json);
      } catch (error) {}
    };

    fetchCountries();
  }, []);

  return countries;
};

export const useRegions = () => {
  // Placeholder for API
  return ['Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic', 'Africa'];
};

export const useSubregions = () => {
  // Placeholder for API
  return [
    'Western Asia',
    'Micronesia',
    'Southeast Europe',
    'Southern Europe',
    'Caribbean',
    'North America',
    'South America',
    'Northern Africa',
    'Western Africa',
    'Eastern Africa',
    'Southern Asia',
    'Polynesia',
    'Central America',
    'Northern Europe',
    'Melanesia',
    'Southern Africa',
    'Central Europe',
    'Western Europe',
    'Middle Africa',
    'Eastern Asia',
    'South-Eastern Asia',
    'Central Asia',
    'Eastern Europe',
    'Australia and New Zealand'
  ];
};

export const useCountryDetails = (name) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fields=name,region,subregion,languages,capital,currencies,timezones`
        );
        const json = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setData(json[0]);
      } catch (error) {}
    };

    fetchData();
  }, [name]);

  return data;
};
