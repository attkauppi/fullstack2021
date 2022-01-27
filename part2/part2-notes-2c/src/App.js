import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  // Tärkeiden muistiinpanojen filtteröinti
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  /*
  useEffect saa 2 parametria
    1. Funktio eli itse efekti
    2. Toinen parametri tarkentaa kuinka usein renderöidään
       Jos toinen parametri on [], efekti suoritetaan ainoastaan
       komponentin ensimmäisen renderöinnin jälkeen.
  */
  useEffect(hook, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = event => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
      }
    
      axios
        .post('http://localhost:3001/notes', noteObject)
        .then(response => {
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
    }
  // Registering an event handler that synchronizes
  // changes made to the input with the component's
  // state
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange} 
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 