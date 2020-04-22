import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ivan', age: 29 },
      { name: 'Davor', age: 0 },
      { name: 'Ljubica', age: 31 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Rect App</h1>
        <button>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}>My hobbies: Racing</Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}  />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}  />
      </div> 
    );
  }
}

export default App;
