import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import AppMainComponent from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<AppMainComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('render without crash',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<AppMainComponent />, div );
  ReactDOM.unmountComponentAtNode(div);
})
