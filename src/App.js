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

  switchNameHandler = (newName) =>{
    // console.log("was clicked");
    // WRONG: this.state.persons[0] = 'Ivan Mitev'
    this.setState( {
      persons: [
      { name: newName, age: 29 },
      { name: 'Davor', age: 0 },
      { name: 'Ljubica', age: 32 }
    ]
  } ) 
  }

  nameChangedHandler = (event) => [
    this.setState( {
      persons: [
      { name: "Ivan", age: 29 },
      { name: event.target.value, age: 0 },
      { name: 'Ljubica', age: 32 }
    ]
  } )
  ]

  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm Rect App</h1>
        <button 
        style={style}
        onClick = {()=>this.switchNameHandler("Ivan MITEV")}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, "Ivan Mitev")}>My hobbies: Racing</Person>
        <Person
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          changed = {this.nameChangedHandler}></Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}  />
      </div> 
    );
  }
}

export default App;
