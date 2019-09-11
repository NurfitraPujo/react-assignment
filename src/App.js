import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username : [
      {name: 'Nurfitra'},
      {name: 'Pujo'}
    ]
  };

  nameChangeHandler = (event) => {
    this.setState({
        username : [
         {name: event.target.value},
         {name: event.target.value}
        ]
      }
    )
  }

  render() {
    return(
    <div className="App">
      <UserInput
        name={this.state.username[0].name}
        change={this.nameChangeHandler}
      ></UserInput>
      <UserOutput 
        name={this.state.username[0].name}
      ></UserOutput>
      <UserOutput 
        name={this.state.username[1].name}  
      ></UserOutput>
    </div>
 )};
}

export default App;
