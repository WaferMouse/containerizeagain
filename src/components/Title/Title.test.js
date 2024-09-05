import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title'; // Adjust the path if necessary

test('renders the Title component with the correct text', () => {
  render(<Title />);
  const headingElement = screen.getByText(/Docs/i);
  expect(headingElement).toBeInTheDocument();
});