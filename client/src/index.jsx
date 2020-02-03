import React from 'react';
import ReactDOM from 'react-dom'
import CarouselMain from './carousel/carouselMain.jsx'
import CalculatorMain from './calculator/calculatorMain.jsx'
import styled from 'styled-components';

const Header = styled.h1`
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 600;
  font-size: 1.375rem; 
`

const SubHeader = styled.h2`
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 600;
  font-size: 1.0rem; 
`

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Header>Mortgage Calculator</Header><br/>
          <CalculatorMain></CalculatorMain>
          <SubHeader>Loan Options</SubHeader>
          <CarouselMain></CarouselMain>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

export default App; 
