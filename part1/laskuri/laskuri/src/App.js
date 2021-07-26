import React, { useState } from 'react'

const App = () => {
  // Komponentin määrittelevä funktio. Antaa tilan
  // sekä määrittelee alkuarvoksi nollan. Alkiot
  // otetaan taulukon destrukturointi syntaksilla talteen
  // muuttujiin counter ja setCounter.
  const [ counter, setCounter ] = useState(0)

  // Eriytetään nappien tahtumienkäsittelijät omiksi komponentin
  // sisältäviksi apufunktioiksi.
  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )


  console.log("Rendering... ", counter)

  return (
    <div>
      <div>{ counter }</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}

export default App