import React, { Component } from 'react';
import Ninjas from './ninjas';
import Newninja from './newninja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'yash', age: 21, belt: 'black', id: 1 },
      { name: 'yuvraj', age: 17, belt: 'blue', id: 2 },
      { name: 'harsh', age: 28, belt: 'golden', id: 3 }
    ]
  }
  addNewNinja = (nin) => {
    nin.id = Math.random();
    let newnin = [...this.state.ninjas, nin];
    this.setState ({
      ninjas: newnin
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(nin => {
      return nin.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>Welcome :) </p>
        < Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        < Newninja addNewNinja={this.addNewNinja} />
      </div>
    );
  }
}

export default App;
