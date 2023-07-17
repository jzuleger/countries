// TODO complete tests 2,3,4

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  //  Test 1
  test('renders overview page', () => {
    // Arrange
    const props = {};

    // Act
    render(
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/countries/i);

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  //  Test 2
  // test('navigate to filtered list on filter click', async () => {
  // });

  //  Test 3
  // test('navigate to full list on filter reset', async () => {
  // });

  //  Test 4
  // test('navigate to detail page on link click', async () => {
  // });
});
