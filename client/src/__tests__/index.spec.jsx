import React from 'react';
import { shallow } from 'enzyme';
import App from '../index.jsx'

let wrapper; 

beforeEach(() => {
  wrapper = shallow(<App/>);
});

describe('first enzyme test', () => {
  it('should render without crashing', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
})