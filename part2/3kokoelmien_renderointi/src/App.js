import React, { useState } from 'react'
// Note-komponentin importtaus
import Note from './components/Note'


  // Sivun päivittäminen muistiinpanojen
  // lisäyksen yhteydessä.

  // Sijoitetaan muistiinpanot App-komponentin tilaan.

  // Komponentti siis alustaa funktion useState avulla 
  // tilan notes arvoksi propseina välitettävän alustavan
  // muistiinpanojen listan:
  const App = (props) => {
    const [notes, setNotes] = useState(props.notes)

    const [newNote, setNewNote] = useState(
      'a new note...'
    )
  
    const addNote = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
    }

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }
  
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} />
          <button type="submit">save</button>
        </form>   
      </div>
    )
  }

export default App