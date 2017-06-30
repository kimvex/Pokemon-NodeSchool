import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './pokemon';
import Pokemons from './pokemons';
import uid from 'uid';

class App extends Component {

  state = {
    grito: '',
    historial: []
  }

  gritar = (grito) => {
    //this.setState({ grito: grito });
    this.state.historial.push(grito);
    this.setState({ historial: this.state.historial });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="cuerpo">
            <ul className="lista">
              {
                Pokemons.map( poke => {
                  return <li key={uid(10)}>
                    <Pokemon number={poke.number} name={poke.name} hacerGritar={ this.gritar.bind(this) }/>
                  </li>
                })
              }
            </ul>
            <ul className="lista">{
              this.state.historial.map( h => {
                return <li key={uid(10)}> { h }</li>
              })
            }</ul>
        </div>
      </div>
    );
  }
}

export default App;
