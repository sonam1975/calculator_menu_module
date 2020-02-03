import React from 'react';
import styled from 'styled-components';

const PricingBarStyle = styled.div`
  display: flex; 
  flex-direction: row; 
  height: 10px; 
  width: 500px;
  margin-left: 75px; 
  justify-content: center;
`

const PrincipalInterestStyle = styled.div`
  width: 20px;
  background-color: #59e0d0;
  border-left: 1px solid #59e0d0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const HOAStyle = styled.div`
  width: 100px;
  background-color: #e69c8a;
`

const TaxesStyle = styled.div`
  width: 20px;
  background-color: #77a2d0;
`

const InsuranceStyle = styled.div`
  width: 20px;
  background-color: #fadd77;
  border-right: 1px solid #fadd77;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

class CalculatorPricingBar extends React.Component {
  constructor(props) {
    super(props);
  };

  /*
    This function calculates the total sum of the pricingObj, helper function. 
  */
  calcSum(pricingObj) {
    var sum = 0; 
    sum = pricingObj.homePrice + pricingObj.hoa + pricingObj.propertyTax + pricingObj.insurance;
    return sum; 
  }

  /*
    Extra logic to update the width of each div based on the value passed in as a prop. Each item
    is essentially a percentage of 500px. 
  */
  render() {
    var total = this.calcSum(this.props.pricingInfo); 
    return (
      <PricingBarStyle>
        <PrincipalInterestStyle style={{width: `${500 * this.props.pricingInfo.homePrice / total}px`}}></PrincipalInterestStyle>
        <HOAStyle style={{width: `${500 * this.props.pricingInfo.hoa / total}px`}}></HOAStyle>
        <TaxesStyle style={{width: `${500 * this.props.pricingInfo.propertyTax / total}px`}}></TaxesStyle>
        <InsuranceStyle style={{width: `${500 * this.props.pricingInfo.insurance / total}px`}}></InsuranceStyle>
      </PricingBarStyle>

    )
  }
}

export default CalculatorPricingBar; 