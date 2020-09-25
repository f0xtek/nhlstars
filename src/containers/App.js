import React, { Component } from 'react';
import Card from '../components/Card';
import './App.css';
import players from '../players.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: players,
    }
  };

  render() {
    const { players } = this.state;
    return !players.length ?
    <h1>Loading...</h1> :
    (
      <div class="tc">
        <h1>NHL ALL STARS</h1>
        <h4>All-time players who achieved 1000+ NHL career points.</h4>
        <Card players={players}/>
      </div>
    )
  }
}

export default App;
