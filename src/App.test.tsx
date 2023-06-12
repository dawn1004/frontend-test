import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup()
})

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render page title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Front-end Test React/i);
  expect(titleElement).toBeInTheDocument();
});

test('should render list of games matches', () => {
  const gameIds = ['12771', '12915', '12939']
  render(<App />);
  gameIds.forEach(gameId => {
    const matchRecap = screen.getByTestId('match-container-'+gameId)
    expect(matchRecap).toBeInTheDocument();
    expect(matchRecap).toHaveTextContent('VS')
  })

  const awayLogo = screen.getAllByTestId('away-logo')
  const homeLogo = screen.getAllByTestId('home-logo')
  expect(awayLogo).toEqual(expect.arrayContaining(awayLogo));
  expect(homeLogo).toEqual(expect.arrayContaining(homeLogo));
})

