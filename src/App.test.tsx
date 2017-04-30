import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { create as renderer } from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot', () => {
  const tree = renderer(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});