import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import GameHeader from './GameHeader';

afterEach(() => {
  cleanup()
})

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should renders logos', () => {
  render(<GameHeader homeTeam='FHC' awayTeam='BIF' />);
  const awayLogo: HTMLImageElement = screen.getByTestId('away-logo')
  expect(awayLogo).toHaveAttribute('src');
  expect(awayLogo.src).toMatch(/\BIF-120.png$/);

  const homeLogo: HTMLImageElement = screen.getByTestId('home-logo')
  expect(homeLogo).toHaveAttribute('src');
  expect(homeLogo.src).toMatch(/\FHC-120.png$/);
});

