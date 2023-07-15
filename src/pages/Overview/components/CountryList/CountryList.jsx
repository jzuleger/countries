import { Link } from 'react-router-dom';
import { UnorderedList, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// import './CountryList.css';

function CountryList({ countries, onCountrySelected }) {
  return (
    <UnorderedList>
      {countries.map((country) => (
        <ListItem key={country.cca2}>
          <Link to={`/country/${country.cca2}`}>
            {country.name.common} <ChevronRightIcon />
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default CountryList;
