import React, { Component } from 'react';


import classes from'./App.css';
import Persons from '../components/Persons/Perosns';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons: [
      { id: '1dfs', name: 'Ivan', age: 29 },
      { id: '2asd', name: 'Davor', age: 0 },
      { id: '3wdw',name: 'Ljubica', age: 31 }
    ],
    showPersons: false
  }

//Ja metodi sto ja menuvaat state --------
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
//------------------
  render() {
//Create Persons List
    let persons = null
    if(this.state.showPersons) {
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>
    }

    return (

        <div className={classes.App}>
        <Cockpit  
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
        {persons}
        </div> 

    );
  }
}

export default App;
