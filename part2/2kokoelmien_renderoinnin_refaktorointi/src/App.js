import React from 'react'
// Note-komponentin importtaus
import Note from './components/Note'

const App = ({ notes }) => {
  // Key-attribuutti määriteltävä nyt
  // Note-komponenteille li-tagien sijasta
 return (
   <div>
     <h1>Notes</h1>
     <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
     </ul>
    </div>
 )
}


export default App