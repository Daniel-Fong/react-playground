import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';

describe(`Accordion`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders empty li when sections not given', () => {
    const tree = renderer.create(<Accordion section={[]} />);
    expect(tree).toMatchSnapshot()
  })
})