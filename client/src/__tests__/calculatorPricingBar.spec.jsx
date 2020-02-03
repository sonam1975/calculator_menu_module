import React from 'react';
import { shallow } from 'enzyme';
import CalculatorPricingBar from '../calculator/calculatorPricingBar.jsx'

describe('calculator pricing bar', () => {

  let wrapper; 
  const props = {
    pricingInfo: {
      homePrice: 200,
      hoa: 200,
      propertyTax: 200,
      insurance: 200
    }
  };
  wrapper = shallow(<CalculatorPricingBar/>);
  wrapper.setProps(props);

  it('should change pricing bar div width: mortgage + interest', () => {
    expect('pricingInfo' in wrapper.props()).toEqual('Moe')
  });
  it('should change pricing bar div width: hoa');
  it('should change pricing bar div width: property taxes');
  it('should change pricing bar div width: insurance');
  it('verify overall width of pricing bar is 500 px');

});