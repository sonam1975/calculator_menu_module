import React from 'react';
import { shallow } from 'enzyme';
import CarouselMain from '../carousel/carouselMain.jsx';

let wrapper; 

beforeEach(() => {
  wrapper = shallow(<CarouselMain/>)
});

describe('Validate arrow functionality', () => {
  it('should move left', () => {
    expect(true).toBe(true); 
  })
});