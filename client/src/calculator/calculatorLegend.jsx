import React from 'react';
import styled from 'styled-components';

const CalculatorLegendContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 50px 100px 150px);
  grid-template-rows: repeat(2, 50px);
  grid-gap: 5px; 
  align-content: center;
  color: #777777;
`

const CalculatorLegendSVGLeft = styled.div` 
  grid-column: 1 / 2;
  margin: 5px; 
`

const CalculatorLegendSVGRight = styled.div` 
  grid-column: 4 / 5;
  margin: 5px;
`

const CalculatorLegendTitleLeft = styled.div` 
  grid-column: 2 / 3;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16;
  margin: 5px; 
  align-self: center;
`

const CalculatorLegendTitleRight = styled.div` 
  grid-column: 5 / 6;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16;
  margin: 5px; 
  align-self: center;
`

const CalculatorLegendValueLeft = styled.div` 
  grid-column: 3 / 4;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 14;
  margin: 5px; 
  align-self: center;
  justify-self: end; 
  color: #333333;
`

const CalculatorLegendValueRight = styled.div` 
  grid-column: 6 / 7;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 14;
  margin: 5px; 
  align-self: center;
  justify-self: end; 
  color: #333333;
  `

/*
  Legend Order: 
    principal & interest : soft cyan, #59e0d0
    property taxes : soft blue, #77a2d0
    hoa dues : soft pink, #e69c8a
    homeowner's insurance: soft yellow, #fadd77
*/


class CalculatorLegend extends React.Component {
  constructor(props) {
    super(props);
    };


  render() {
    return (
      <CalculatorLegendContainer>
        <CalculatorLegendSVGLeft>
          <svg><circle cx="20" cy="20" r="5" fill="#59e0d0"></circle></svg>
        </CalculatorLegendSVGLeft>
        <CalculatorLegendTitleLeft>Mortgage + Interest</CalculatorLegendTitleLeft>
        <CalculatorLegendValueLeft>${this.props.pricingInfo.homePrice}</CalculatorLegendValueLeft>
        <CalculatorLegendSVGRight>
          <svg><circle cx="20" cy="20" r="5"fill="#77a2d0"></circle></svg>
        </CalculatorLegendSVGRight>
        <CalculatorLegendTitleRight>Property Taxes</CalculatorLegendTitleRight>
        <CalculatorLegendValueRight>${this.props.pricingInfo.propertyTax}</CalculatorLegendValueRight>
        <CalculatorLegendSVGLeft>
          <svg><circle cx="20" cy="20" r="5" fill="#e69c8a"></circle></svg>
        </CalculatorLegendSVGLeft>
        <CalculatorLegendTitleLeft>HOA</CalculatorLegendTitleLeft>
        <CalculatorLegendValueLeft>${this.props.pricingInfo.hoa}</CalculatorLegendValueLeft>
        <CalculatorLegendSVGRight>
          <svg><circle cx="20" cy="20" r="5" fill="#fadd77"></circle></svg>
        </CalculatorLegendSVGRight>
        <CalculatorLegendTitleRight>Homeowner's Insurance</CalculatorLegendTitleRight>
        <CalculatorLegendValueRight>${this.props.pricingInfo.insurance}</CalculatorLegendValueRight>
      </CalculatorLegendContainer>
    )
  }
}

export default CalculatorLegend; 

