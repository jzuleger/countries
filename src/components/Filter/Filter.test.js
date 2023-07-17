import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Filter from './Filter';

const mockOnSelect = jest.fn();

afterEach(() => {
  cleanup();
});

describe('Filter', () => {
  //   Test 1
  test('renders empty select', () => {
    // Arrange
    const props = {
      type: 'region',
      options: []
    };

    // Act
    render(<Filter {...props} onSelect={mockOnSelect} />);

    // Assert
    expect(screen.getAllByRole('option').length).toBe(1);
  });

  //   Test 2
  test('renders options', () => {
    // Arrange
    const props = {
      type: 'region',
      options: ['Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic', 'Africa']
    };

    // Act
    render(<Filter {...props} onSelect={mockOnSelect} />);

    // Assert
    expect(screen.getAllByRole('option').length).toBe(7);
  });

  //   Test 3
  test('returns value via callback when option is selected', () => {
    // Arrange
    const props = {
      type: 'region',
      options: ['Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic', 'Africa']
    };
    render(<Filter {...props} onSelect={mockOnSelect} />);
    const element = screen.getByRole('combobox');

    // Act
    userEvent.selectOptions(element, 'Europe');

    // Assert
    expect(mockOnSelect).toBeCalledWith('Europe');
  });
});
