import React, { useState } from 'react'

const App = () => {
  // Komponentin määrittelevä funktio. Antaa tilan
  // sekä määrittelee alkuarvoksi nollan. Alkiot
  // otetaan taulukon destrukturointi syntaksilla talteen
  // muuttujiin counter ja setCounter.
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )


  console.log("Rendering... ", counter)

  return (
    <div>{ counter }</div>
  )
}

export default App