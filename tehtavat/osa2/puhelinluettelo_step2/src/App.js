import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log("Button clicked", event.target)
    const personObject = {
      name: newName,
    }
    if (isInPersons(personObject)) {
      alert(`${personObject.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const isInPersons = (personObject) => {
    if (persons.some(e => e.name === personObject.name)) {
      return true
    }
    return false    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person =>
            <Person key={person.name} person={person} />
          )}
        </ul>
    </div>
  )

}

export default App