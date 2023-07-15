// import './Detail.css';
import { useParams, Link } from 'react-router-dom';
import { Button, Heading } from '@chakra-ui/react';

import CountryDetails from '../../components/CountryDetails/CountryDetails';
import CountryForm from '../../components/CountryForm/CountryForm';

import { useCountryDetails } from '../../services/countries/countries';

function Detail({}) {
  let { countryId } = useParams();

  const data = useCountryDetails(countryId);

  return (
    <article className="detail">
      {data && (
        <>
          <header>
            <Heading as="h1" size="2xl">
              Country: {data.name.common}
            </Heading>
          </header>

          <CountryDetails details={data} />

          <CountryForm />

          <aside>
            <nav aria-label="Actions">
              <Link to="/">Back to List</Link>
            </nav>
          </aside>
        </>
      )}
    </article>
  );
}

export default Detail;
