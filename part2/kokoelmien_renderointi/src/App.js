import React from 'react'

const App = ( {notes} ) => {
  //const { notes } = props

  // return (
  //   <div>
  //     <h1>Notes</h1>
      
  //     <ul>
  //       <li>{notes[0].content}</li>
  //       <li>{notes[1].content}</li>
  //       <li>{notes[2].content}</li>
  //     </ul>
  //   </div>
  // )
  /**
  * Kovakoodauksen (^) sijasta voidaan taulukon renderöinti yleistää
  * map-funktion avulla:
  * 
  * React käyttää taulukossa olevien elementtien key-kenttiä
  * päätellessään, miten sen tulee päivittää komponentin generoimaa
  * näkymää silloin, kun komponentti uudelleenrenderöidään. Lisää
  * täällä: https://reactjs.org/docs/reconciliation.html#recursing-on-children
  */
 return (
   <div>
     <h1>Notes</h1>
     <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}  
     </ul>
    </div>
 )
}


export default App