import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'
import { create as renderer } from 'react-test-renderer'

const increment = () => void

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App counter={{value: 0}} increment={increment} />, div)
})

it('renders a snapshot', () => {
  const tree = renderer(<App counter={{value: 0}} increment={increment} />).toJSON()
  expect(tree).toMatchSnapshot()
})