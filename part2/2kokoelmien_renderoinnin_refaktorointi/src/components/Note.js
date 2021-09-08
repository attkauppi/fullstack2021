import React from 'react'

// Note-komponentti eristettynä

const Note = ({ note }) => {
    return (
        <li>{note.content}</li>
    )
}

// Eksporttaa määritellyn komponentin eli
// Note-muuttujan. Tämän jälkeen komponentti
// voidaan importata esim. App.js:ssä.
export default Note