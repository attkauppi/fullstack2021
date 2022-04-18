import React, { useEffect, useState } from 'react'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ namesFound, setNamesFound ] = useState([])
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [successMessage, setSuccessMessage] = useState(null)


  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setNamesFound(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone
    }
    if (isInPersons(personObject)) {
      if (!isInPersonsSamePhone(personObject)) {
        // Same name, different phone. Change, if user confirms.
        const personObj = persons.find(n => n.name === personObject.name)
        console.log("Person obj: ", personObj)
        const changedPerson = { ...personObj, phone: personObject.phone }
        console.log("Changed: ", changedPerson)
        const id = personObj.id

        if (window.confirm(`'${personObj.name}' already added. Change number?`)) {
          personsService
          .update(personObj.id, changedPerson).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person: changedPerson))
          })
          .catch(error => {
            alert(
              `the person '${personObj.name}' was already deleted from server`
            )
            setPersons(persons.filter(n => n.id !== id))
          })
          .then(window.location.reload(true))
        }
      } else {
        // Same name, same phone. Just shout at user.
        alert(`${personObject.name} is already added to phonebook with that phone number!`)
      }
     
    } else {
      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          // setNamesFound(namesFound.concat(returnedPerson))
          setSuccessMessage(
            `Added ${returnedPerson.name}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
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

  // const changeNumberOf = (personObject) => {
  //   const personObj = persons.find(n => n.name === personObject.name)
  //   const changedPerson = {...personObj, phone: personObject.phone}

  //   personsService
  //     .update(id, changedPerson).then(returnedPerson => {

  //     })
  // }

  const isInPersons = (personObject) => {
    if (persons.some(e => e.name === personObject.name)) {
      return true
    }
    return false    
  }

  const isInPersonsSamePhone = (personObject) => {
    if (persons.some(e => e.name === personObject.name)) {
      if (persons.some(e => e.phone === personObject.phone)) {
        return true
      }
      return false
    }
    return false    
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      {/* <Notification message={errorMessage} /> */}
      <Notification message={successMessage} />
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