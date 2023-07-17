import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CountryList from './CountryList';

afterEach(() => {
  cleanup();
});

describe('CountryList', () => {
  //   Test 1
  test('renders empty list', () => {
    // Arrange
    const props = {
      countries: []
    };

    // Act
    render(<CountryList {...props} />);

    // Assert
    expect(screen.queryAllByRole('listitem')).toStrictEqual([]);
  });

  //   Test 2
  test('render links', () => {
    // Arrange
    const props = {
      countries: [
        { cca2: 'MU', name: { common: 'Mauritius' } },
        { cca2: 'DK', name: { common: 'Denmark' } },
        { cca2: 'VN', name: { common: 'Vietnam' } }
      ]
    };

    // Act
    render(
      <BrowserRouter>
        <CountryList {...props} />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getAllByRole('link').length).toBe(3);
  });
});
