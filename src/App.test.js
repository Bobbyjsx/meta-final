import { render, screen } from '@testing-library/react';
import App from './App';
import Nft from "./nft"
test('renders learn react link', () => {
  render(<App />);
  render(<Nft />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
