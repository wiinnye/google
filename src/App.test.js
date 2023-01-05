import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';

test('renders welcome message', async () => {
  render(<App />, { wrapper: Router });
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});