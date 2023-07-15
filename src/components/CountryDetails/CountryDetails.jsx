// import './CountryDetails.css';

function CountryDetails({ details }) {
  return (
    <section>
      <h2>Country Details</h2>
      <p>Region: {details.region}</p>
      <p>Subregion: {details.subregion}</p>
      <p>
        Capital:{' '}
        {details.capital.reduce(
          (acc, cur) => (acc ? `${acc}, ${cur}` : `${cur}`),
          ''
        )}
      </p>
      <p>
        Language:{' '}
        {Object.keys(details.languages).reduce(
          (acc, currentKey) =>
            acc
              ? `${acc}, ${details.languages[currentKey]}`
              : `${details.languages[currentKey]}`,
          ''
        )}
      </p>
      <p>Currencies: </p>
      <ul>
        {Object.keys(details.currencies).map((key) => {
          return (
            <li key={key}>
              {key} {details.currencies[key].name}{' '}
              {details.currencies[key].symbol}
            </li>
          );
        })}
      </ul>
      <p>Timezones: </p>
      <ul>
        {details.timezones.map((timezone) => {
          return <li key={timezone}>{timezone}</li>;
        })}
      </ul>
    </section>
  );
}

export default CountryDetails;
