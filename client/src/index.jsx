import React from 'react';
import ReactDOM from 'react-dom';
import SubApp from './test.jsx'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>Hello World!</div>
        <SubApp/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));