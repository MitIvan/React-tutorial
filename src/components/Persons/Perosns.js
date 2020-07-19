import React from 'react'

import Person from './Person/Person'//go zima person za da go iskoristi dole vo <Person />

const persons = (props) => props.persons.map((person, index) => {
        return <Person 
          name={person.name} 
          age={person.age}
          click={()=>props.clicked(index)}
          changed={(event) => props.changed(event, person.id)} 
          key={person.id} />
      });

export default persons