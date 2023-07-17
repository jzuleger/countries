import { useParams, Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

import './Detail.css';

import { useCountryDetails } from '../../services/countries/countries';
import { useSubmitContactDetails } from '../../services/contacts/contacts';

import CountryDetails from '../../components/CountryDetails/CountryDetails';
import ContactForm from '../../components/ContactForm/ContactForm';

function Detail({}) {
  let { countryId } = useParams();

  const data = useCountryDetails(countryId);
  const [submitContactDetails] = useSubmitContactDetails();

  return (
    <article className="detail">
      {data && (
        <>
          <header className="detail__header">
            <Heading as="h1" size="2xl">
              {data.name.common}
            </Heading>
          </header>

          <aside className="detail__actions">
            <nav aria-label="Actions">
              <Link to="/">
                <span className="detail__action detail__action--back">
                  <ChevronLeftIcon /> Back to List
                </span>
              </Link>
            </nav>
          </aside>

          <CountryDetails details={data} />

          <ContactForm
            headline="Sales Representative"
            onSubmit={(formFields) =>
              submitContactDetails(countryId, formFields)
            }
          />
        </>
      )}
    </article>
  );
}

export default Detail;
