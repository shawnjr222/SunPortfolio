import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { HashRouter } from "react-router-dom"

ReactDOM.render(
    <HashRouter><App /></HashRouter>,
    document.getElementById('root')
);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
