import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Recap from './Recap';

afterEach(() => {
  cleanup()
})

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should renders category dropdown', () => {
  render(<Recap />);
  const droptown = screen.getByTestId('test-dropdown')
  expect(droptown).toBeInTheDocument();
});

