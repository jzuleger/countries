import {
  Heading,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';

import './CountryDetails.css';

function CountryDetails({ details }) {
  return (
    <section className="country-details">
      <Heading as="h2" size="md">
        Details
      </Heading>
      <TableContainer className="country-details__table">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Information</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Region</Td>
              <Td>{details.region}</Td>
            </Tr>
            <Tr>
              <Td>Subregion</Td>
              <Td>{details.subregion}</Td>
            </Tr>
            <Tr>
              <Td>Capital</Td>
              <Td>
                {details.capital.reduce(
                  (acc, cur) => (acc ? `${acc}, ${cur}` : `${cur}`),
                  ''
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>Language</Td>
              <Td>
                {Object.keys(details.languages).reduce(
                  (acc, currentKey) =>
                    acc
                      ? `${acc}, ${details.languages[currentKey]}`
                      : `${details.languages[currentKey]}`,
                  ''
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>Currencies</Td>
              <Td>
                <UnorderedList>
                  {Object.keys(details.currencies).map((key) => {
                    return (
                      <ListItem key={key}>
                        {key} {details.currencies[key].name}{' '}
                        {details.currencies[key].symbol}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              <Td>Timezones</Td>
              <Td>
                {
                  <UnorderedList>
                    {details.timezones.map((timezone) => {
                      return <ListItem key={timezone}>{timezone}</ListItem>;
                    })}
                  </UnorderedList>
                }
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default CountryDetails;
