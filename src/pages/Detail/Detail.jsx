// import './Detail.css';
import { useParams, Link } from 'react-router-dom';

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
            <h1>Country: {data.name.common}</h1>
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
