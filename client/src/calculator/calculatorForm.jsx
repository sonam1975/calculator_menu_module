import React from 'react';
import styled from 'styled-components';

const CalculatorContainerStyle = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(4, 60px);
  grid-gap: 10px; 
`

const CalculatorFormStyleLeft = styled.div` 
  grid-column: 1 / 2;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16;
  margin-left: 20px; 
  color: #767676;
  
  input[type="number"] {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 300;
    font-size: 15;
    color: #353535; 
    height: 40px; 
    width: 300px; 
    margin-top: 5px; 
    margin-bottom: 5px;
    padding: 10px; 
  }

  input[type="range"] {
    height: 40px; 
    width: 300px; 
  }

  input[type="range"] {
    -webkit-appearance: none;
    height: 40px; 
    width: 300px; 
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    background: #2497E3;
    border-radius: 4px;
    border: 0px solid #000000;
  }

  input[type=range]::-webkit-slider-thumb {
    border: 1px solid #2497E3;
    height: 18px;
    width: 17px;
    border-radius: 25px;
    background: #FFFFFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
`
const CalculatorFormStyleRight = styled.div` 
  grid-column: 2 / 3;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16;
  margin-left: 25px;
  color: #767676;
  
  input[type="number"] {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 300;
    font-size: 15;
    color: #353535;
    height: 40px; 
    width: 300px; 
    margin-top: 5px; 
    margin-bottom: 5px; 
    padding: 10px; 
  }

  input[type="range"] {
    -webkit-appearance: none;
    height: 40px; 
    width: 300px; 
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    background: #2497E3;
    border-radius: 4px;
    border: 0px solid #000000;
  }

  input[type=range]::-webkit-slider-thumb {
    border: 1px solid #2497E3;
    height: 18px;
    width: 17px;
    border-radius: 25px;
    background: #FFFFFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
`

class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
  }

  /*
    Middleman function between CalculatorForm and CalculatorMain. Ensures that if the slider or the
    input text for homePrice or downPayment is selected, the change handler in the parent class behaves
    as expected and updates the right state.
  */
  syncState(e) {
    if (e.target.id === "homePrice" || e.target.id === "homePriceSlider") {
      this.props.onChangeHandler(e, 'homePrice');
    } else if (e.target.id === "downPayment" || e.target.id === "downPaymentSlider") {
      this.props.onChangeHandler(e, 'downPayment');    
    } else {
      // do nothing
    }
  }

  render() {
    return (
        <form>
          <CalculatorContainerStyle>
            <CalculatorFormStyleLeft>
              Mortgage + Interest <br/>
              <input type="number" placeholder="$" id="homePrice" 
              value={this.props.pricingInfo.homePrice} 
              onChange={this.syncState.bind(this)}></input>
            </CalculatorFormStyleLeft>
            <CalculatorFormStyleRight>
              Down Payment <br/>
              <input type="number" placeholder="$" id="downPayment" 
              value={Number.parseInt(this.props.pricingInfo.downPayment)} 
              onChange={this.syncState.bind(this)}></input>
            </CalculatorFormStyleRight>
            <CalculatorFormStyleLeft>
              <input type="range" 
              min="1000" 
              max="50000" 
              id="homePriceSlider" 
              value={this.props.pricingInfo.homePrice} 
              onChange={this.syncState.bind(this)}></input>
            </CalculatorFormStyleLeft>
            <CalculatorFormStyleRight>
              <input type="range" 
              min="10000" 
              max="1000000" 
              id="downPaymentSlider" 
              value={Number.parseInt(this.props.pricingInfo.downPayment)} 
              onChange={this.syncState.bind(this)}></input>
            </CalculatorFormStyleRight>
            {console.log(this.props)}
            <CalculatorFormStyleLeft>
              Property Tax <br/>
              <input type="number" placeholder="$ / year" id="propertyTax" 
              value={this.props.pricingInfo.propertyTax}
              onChange={this.props.onChangeHandler}></input>
            </CalculatorFormStyleLeft>
            <CalculatorFormStyleRight>
              HOA <br/>
              <input type="number" placeholder="$ / month" id="hoa" 
              value={this.props.pricingInfo.hoa}
              onChange={this.props.onChangeHandler}></input>
            </CalculatorFormStyleRight>
            <CalculatorFormStyleLeft>
              Homeowner's Insurance <br/>
              <input type="number" placeholder="$ / month" id="insurance" 
              value={this.props.pricingInfo.insurance}
              onChange={this.props.onChangeHandler}></input>
            </CalculatorFormStyleLeft>
          </CalculatorContainerStyle>
        </form>
    )
  }
}

export default CalculatorForm; 