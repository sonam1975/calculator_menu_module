import React from 'react';
import CalculatorForm from './calculatorForm.jsx';
import CalculatorPricingBar from './calculatorPricingBar.jsx';
import CalculatorLegend from './calculatorLegend.jsx'
import axios from 'axios';

class CalculatorMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawPricingObj: {
        // NOTE: homePrice is really mortgage + interest
        homePrice: 0,
        downPayment: 0,
        propertyTax: 0,
        hoa: 0,
        insurance: 0,
      },
      pricingObj: {
        // NOTE: homePrice is really mortgage + interest
        homePrice: 0,
        downPayment: 0,
        propertyTax: 0,
        hoa: 0,
        insurance: 0,
      }

    }
  }

  /*
    On page load, get a random house to populate the calculator with. See server API for what is returned.
  */
  componentDidMount() {
    axios.get(`/homes`)
    .then(({ data }) => {
      var rawPricingObj, pricingObj = {};
      rawPricingObj = {
        // NOTE: homePrice is really mortgage + interest
        homePrice: Number.parseInt((data.housePrice * (100 + data.interestRate)/100) / (12 * 30)),
        downPayment: data.housePrice * 0.2,
        propertyTax: Number.parseInt(data.statePropTax/100 * data.housePrice / (12 * 30)),
        hoa: data.monthlyHOA,
        insurance: Number.parseInt(data.insuranceRate/100 * data.housePrice / (12 * 30)), 
      };
      pricingObj = rawPricingObj; 
      // update default values for rawPricingObj
      this.setState(()=>({rawPricingObj}));
      // update default values for pricingObj
      this.setState(()=>({pricingObj}));
    })
    .catch(err => {
      console.log(err);
    });
  }

  /*
    This is the main form handler function. It gets passed to the child CalculatorForm component. 
    The true state is stored in calculatorMain (homePrice, downPayment, propertyTax, hoa, insurance).
    The raw input is stored in the rawPricingObj state and the sanitized input (pretty dumb atm) is stored
    in the pricingObj state. 
  */
  updateFormData({ target }, id) {
    // special case for sliders
    if (arguments.length === 2) {
      target.id = id; 
    }
    const rawPricingObj = { ...this.state.rawPricingObj, [target.id]: Number.parseFloat(target.value)};
    this.setState(()=>({rawPricingObj}));
    if (this.sanitizeInputs(rawPricingObj)) {
      const pricingObj = { ...this.state.pricingObj, [target.id]: Number.parseFloat(target.value)};
      this.setState(()=>({pricingObj}));
    }
  }

  sanitizeInputs({homePrice, propertyTax, hoa, insurance}) {
    if (homePrice > -1 && propertyTax > -1 && hoa > -1 && insurance > -1) {
      return true; 
    }
    return false; 
  }

  render() {
    return (
      <React.Fragment>
        <CalculatorPricingBar pricingInfo={this.state.pricingObj}></CalculatorPricingBar>
        <br/>
        <CalculatorLegend pricingInfo={this.state.pricingObj}></CalculatorLegend>
        <br/>
        <CalculatorForm pricingInfo={this.state.rawPricingObj}
        onChangeHandler={this.updateFormData.bind(this)}></CalculatorForm>
      </React.Fragment>
    )
  }
}

export default CalculatorMain; 
