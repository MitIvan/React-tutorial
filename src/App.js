import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1dfs', name: 'Ivan', age: 29 },
      { id: '2asd', name: 'Davor', age: 0 },
      { id: '3wdw',name: 'Ljubica', age: 31 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={()=>this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} 
              key={person.id} />
          })}
      </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm Rect App</h1>
        <button 
          style={style}
          onClick = {this.togglePersonHandler}> Toggle Persons
        </button>
      {persons}
      </div> 
    );
  }
}

export default App;
