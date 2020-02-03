import React from 'react';
import styled from 'styled-components';
import axios from 'axios'; 

const CarouselBody = styled.div`
  display: flex;
  overflow: hidden;
  width: 40%;
  height: 12vh;
  margin: 20px; 
  padding: 20px; 
  box-sizing: border-box; 
  align-items: center;
  position: relative; 
`

const Card = styled.div`
  border-style: solid;
  border-width: 1px; 
  border-radius: 5px; 
  border-color:  #d1d1d1;
  min-width: 200px; 
  height: 75px;
  transition: 0.5s; 

  display: grid; 
  grid-template-columns: 1fr, 1fr; 
  grid-gap: 20px; 
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 500;
  font-size: 13px; 
  padding: 15px; 
  margin: 15px; 
  color: #333333;

  :hover {
    background-color: #f0f0f5;
  }
`

const MiniText = styled.div`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 10px; 
  font-weight: 300;
  color: #878787;
`
const LeftButton = styled.button`
  position: absolute; 
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white; 
  z-index : 1;
  border-radius: 20px; 
  font-size: 20px; 
  :focus {
    outline:0;
  }
  :hover {
    background-color:  #b4b4cb
  }
`;

const RightButton = styled.button`
  position: absolute; 
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white; 
  z-index : 1;
  border-radius: 20px; 
  font-size: 20px; 
  :focus {
    outline:0;
  }
  :hover {
    background-color:  #b4b4cb
  }
`;

class CarouselMain extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      currCardIdx: 0,
      cardsArr: []
    };
  };

  /*
    On page load, get 5 random banks to populate the cards with. The API call gets back an array of 5 objects. 
  */
  componentDidMount() {
    axios.get(`/bank`)
    .then(({ data }) => {
      this.setState({cardsArr : data})
    })
    .catch(err => {
      console.log(err);
    });
  }

  /*
    Updates the state to signal that we have moved left, translates the x value by -100 * n
  */
  goLeft() {
    // check if out of bounds, cycle to right most card if the case
    if (this.state.x === 0) {
      this.setState({
        x: this.state.x - 100 * (this.state.cardsArr.length - 1),
        currCardIdx: this.state.cardsArr.length - 1
      })
    } else {
      this.setState({
        x: this.state.x + 100,
        currCardIdx: this.state.currCardIdx - 1
      });
    }
  };

  /*
    Updates the state to signal that we have moved right, translates the x value by +100 * n
  */
  goRight() {
    // check if out of bounds, cycle to left most card if the case
    if (this.state.currCardIdx === this.state.cardsArr.length - 1) {
      this.setState({
        x: this.state.x + 100 * (this.state.cardsArr.length - 1),
        currCardIdx: 0
      })
    } else {
      this.setState({
        x: this.state.x - 100,
        currCardIdx: this.state.currCardIdx + 1
      });
    }
  }; 

  render() {
    var cards = this.state.cardsArr.map((item, idx) => (
      <Card key={idx} style={{transform: `translateX(${this.state.x}%)`}}>
        <div><strong>{item.bankRate}%</strong><MiniText>Interest Rate</MiniText></div>
        <div><strong>{item.bankName}</strong><MiniText>Bank #{item.bankRateId}</MiniText></div>
      </Card>
    ))
    return (
        <CarouselBody>
          <LeftButton onClick={this.goLeft.bind(this)}><strong>&lt;</strong></LeftButton>
          <RightButton onClick={this.goRight.bind(this)}><strong>&gt;</strong></RightButton>
          { cards }
        </CarouselBody>
    )
  }
}

export default CarouselMain; 