// import './Detail.css';

import Button from '../../components/Button/Button';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import CountryForm from '../../components/CountryForm/CountryForm';

import { useCountryDetails } from '../../services/countries/countries';

function Detail({ name, onCountryReset }) {
  const data = useCountryDetails(name);

  return (
    <article className="detail">
      <header>
        <h1>Country: {name}</h1>
      </header>

      {data && <CountryDetails details={data} />}

      <CountryForm />

      <aside>
        <nav aria-label="Actions">
          <Button label="Back to List" onClick={onCountryReset} />
        </nav>
      </aside>
    </article>
  );
}

export default Detail;
