import { useEffect, useState } from 'react';

const useCountriesURL = (filter = false) => {
  if (filter?.type && filter?.value) {
    return `https://restcountries.com/v3.1/${filter.type}/${filter.value}?fields=name,cca2`;
  }

  return 'https://restcountries.com/v3.1/all?fields=name,cca2';
};

export const useCountries = (filter = false) => {
  const [countries, setCountries] = useState(null);
  const fetchURL = useCountriesURL(filter);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(fetchURL);
        const json = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setCountries(json);
      } catch (error) {}
    };

    fetchCountries();
  }, [fetchURL]);

  return countries;
};

export const useRegions = () => {
  return ['Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic', 'Africa'];
};

export const useSubregions = () => {
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

export const useLanguages = () => {
  return [
    'Afrikaans',
    'Albanian',
    'Amharic',
    'Arabic',
    'Aramaic',
    'Armenian',
    'Aymara',
    'Azerbaijani',
    'Belarusian',
    'Belizean Creole',
    'Bengali',
    'Berber',
    'Bislama',
    'Bosnian',
    'Bulgarian',
    'Burmese',
    'Carolinian',
    'Catalan',
    'Chamorro',
    'Chewa',
    'Chibarwe',
    'Chinese',
    'Comorian',
    'Cook Islands Māori',
    'Croatian',
    'Czech',
    'Danish',
    'Dari',
    'Dutch',
    'Dzongkha',
    'English',
    'Estonian',
    'Faroese',
    'Fiji Hindi',
    'Fijian',
    'Filipino',
    'Finnish',
    'French',
    'Georgian',
    'German',
    'Gilbertese',
    'Greek',
    'Greenlandic',
    'Guaraní',
    'Guernésiais',
    'Haitian Creole',
    'Hassaniya',
    'Hebrew',
    'Herero',
    'Hindi',
    'Hiri Motu',
    'Hungarian',
    'Icelandic',
    'Indonesian',
    'Irish',
    'Italian',
    'Jamaican Patois',
    'Japanese',
    'Jèrriais',
    'Kalanga',
    'Kazakh',
    'Khmer',
    'Khoekhoe',
    'Khoisan',
    'Kikongo',
    'Kinyarwanda',
    'Kirundi',
    'Korean',
    'Kwangali',
    'Kyrgyz',
    'Lao',
    'Latin',
    'Latvian',
    'Lingala',
    'Lithuanian',
    'Lozi',
    'Luxembourgish',
    'Macedonian',
    'Malagasy',
    'Malay',
    'Maldivian',
    'Maltese',
    'Manx',
    'Marshallese',
    'Mauritian Creole',
    'Mongolian',
    'Montenegrin',
    'Māori',
    'Nauru',
    'Ndau',
    'Ndonga',
    'Nepali',
    'New Zealand Sign Language',
    'Niuean',
    'Norfuk',
    'Northern Ndebele',
    'Northern Sotho',
    'Norwegian',
    'Norwegian Bokmål',
    'Norwegian Nynorsk',
    'Palauan',
    'Papiamento',
    'Pashto',
    'Persian (Farsi)',
    'Polish',
    'Portuguese',
    'Quechua',
    'Romanian',
    'Romansh',
    'Russian',
    'Sami',
    'Samoan',
    'Sango',
    'Serbian',
    'Seychellois Creole',
    'Shona',
    'Sinhala',
    'Slovak',
    'Slovene',
    'Somali',
    'Sorani',
    'Sotho',
    'Southern Ndebele',
    'Southern Sotho',
    'Spanish',
    'Swahili',
    'Swazi',
    'Swedish',
    'Swiss German',
    'Tajik',
    'Tamil',
    'Tetum',
    'Thai',
    'Tigrinya',
    'Tok Pisin',
    'Tokelauan',
    'Tonga',
    'Tongan',
    'Tshiluba',
    'Tsonga',
    'Tswana',
    'Turkish',
    'Turkmen',
    'Tuvaluan',
    'Ukrainian',
    'Upper Guinea Creole',
    'Urdu',
    'Uzbek',
    'Venda',
    'Vietnamese',
    'Xhosa',
    'Zimbabwean Sign Language',
    'Zulu'
  ];
};

export const useCountryDetails = (countryId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryId}?fields=name,region,subregion,languages,capital,currencies,timezones`
        );
        const json = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setData(json);
      } catch (error) {}
    };

    fetchData();
  }, [countryId]);

  return data;
};
