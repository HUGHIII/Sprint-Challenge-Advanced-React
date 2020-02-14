import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Header from './components/Header'
import PlayerCard from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders header', () => {
  
  const { getByText } = render(<App />);

  const header = getByText(/players/i);

  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});

test('renders dark option', () => {
  
  const { getByText } = render(<App />);

  const dark = getByText(/dark mode/i);

  expect(dark).toBeInTheDocument();
  expect(dark).toBeTruthy();
  expect(dark).not.toBeFalsy();
});

test('button renders', () => {
  const {queryByTestId} = render(<Header/>)
  expect(queryByTestId('dark-mode-toggle')).toBeTruthy()
})



