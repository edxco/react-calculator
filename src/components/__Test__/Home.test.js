import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('return content from Home matches snapshot', () => {
  const content = render(<Home />);
  expect(screen.getByText('Changelog')).toBeInTheDocument();
});
