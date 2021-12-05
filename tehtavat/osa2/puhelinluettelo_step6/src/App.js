import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ namesFound, setNamesFound ] = useState([persons])

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone
    }
    if (isInPersons(personObject)) {
      alert(`${personObject.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const namesToShow = (query) => {
    return persons.filter(
      el => el.name.toString().toLowerCase().indexOf(
        query.toString().toLowerCase()) !== -1)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
    setNamesFound(namesToShow(event.target.value))
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
      <div>
          filter shown with <input 
            value={filterName}
            onChange={handleFilterNameChange}
          />
        </div>
      <h2>add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          phone: <input 
            value={newPhone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Persons persons={namesFound} />
    </div>
  )

}

export default App