import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ProductStore brand title', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/ProductStore/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
