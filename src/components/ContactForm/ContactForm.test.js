// TODO complete tests 2,3,4

import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

const mockOnSubmit = jest.fn();

afterEach(() => {
  cleanup();
});

describe('ContactForm', () => {
  //   Test 1
  it('renders form', () => {
    // Arrange
    const props = {
      headline: 'Contact Form'
    };

    // Act
    render(<ContactForm {...props} onSubmit={mockOnSubmit} />);

    // Assert
    expect(
      screen.getByRole('heading', { name: 'Contact Form' })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /phone/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  //  Test 2
  // it('prevents submit with empty form fields', () => {
  //   // Arrange
  //   const props = {
  //     headline: 'Contact Form'
  //   };

  //   // Act
  //   render(<ContactForm {...props} onSubmit={mockOnSubmit} />);
  //   fireEvent.click(screen.getByText(/submit/i));

  //   // Assert
  //   expect(mockOnSubmit).not.toBeCalled();
  // });

  //   Test 3
  // it('submits invalid input values', async () => {
  // });

  //   Test 4
  // it('returns form field values to callback function on successful submit', async () => {
  //   // Arrange
  //   const props = {
  //     headline: 'Contact Form'
  //   };

  //   // Act

  //   render(<ContactForm {...props} onSubmit={mockOnSubmit} />);

  //   const nameInput = screen.getByRole('textbox', { name: /name/i });
  //   const phoneInput = screen.getByRole('textbox', { name: /phone/i });

  //   await userEvent.type(nameInput, 'Mia');
  //   await userEvent.type(phoneInput, '0123456789');
  // await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Assert
  // expect(nameInput.value).toBe('Mia');
  // expect(phoneInput.value).toBe('0123456789');
  // expect(mockOnSubmit).toBeCalledWith({ name: 'Mia', phone: '0123456789' });
  // });
});
