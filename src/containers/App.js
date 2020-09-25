import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import players from '../players.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: players.data,
    }
  };

  render() {
    const { players } = this.state;
    return !players.length ?
    <h1>Loading...</h1> :
    (
      <div className="tc">
        <h1 className="f-subheadline tracked near-black">NHL ALL STARS</h1>
        <CardList players={players}/>
      </div>
    )
  }
}

export default App;
