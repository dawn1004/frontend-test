import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import GameHeader from './GameHeader';
import StatsBar from './StatsBar';

afterEach(() => {
  cleanup()
})

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should renders status bar', () => {
  render(<StatsBar team1Value={20} team2Value={32} maxValue={40} title="Goal per minute" delayNumber={0} />);

  const team1Value = screen.getByText('20')
  const team2Value = screen.getByText('32')
  const title = screen.getByText('Goal per minute')

  expect(team1Value).toBeInTheDocument()
  expect(team2Value).toBeInTheDocument()
  expect(title).toBeInTheDocument()
});

