import React from 'react'

// Refaktoroidaan yksittäisen muistiinpanon
// esittäminen oman komponenttinsa Note
// vastuulle
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

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