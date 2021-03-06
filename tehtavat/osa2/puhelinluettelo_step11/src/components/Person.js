import React from 'react'
import personsService from '../services/persons'
import Notification from './Notification'


const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.phone}
      <div>
      <button  onClick={() => {
        if (window.confirm('Are you sure you wish to delete this item?')) personsService.remove(person.id).then(person => {
          setSuccessMessage(
            `Added ${person.name}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          window.location.reload(true)
          
        }) 
        }} >
              Delete
      </button>
      </div>
      </li>
  )
}

export default Person