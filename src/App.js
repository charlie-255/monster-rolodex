import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CustomHooks from './hooks/CustomHooks.jsx'
import UseState from './hooks/UseState.jsx'
// import { render } from 'react-dom';

class App extends Component{
  constructor(){
    super();

    this.state={
      monster:[
        {
          name: 'Frankenstein',
          id: 'm1'
        },
        {
          name: 'Dracula',
          id: 'm2'
        },
        {
          name: 'Zombies',
          id: 'm3'
        },
      ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}))
    
  }
  render(){
    return(
          <div className="App">
          {this.state.monster.map(monster => (
           <h1 key={monster.id}>{monster.name}</h1> 
          ))}
          <UseState/>
          <CustomHooks/>
          </div>
        );
      }
}

export default App;
