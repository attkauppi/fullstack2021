import React, { useState } from 'react'


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

// Eriytetään button
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // Komponentin määrittelevä funktio. Antaa tilan
  // sekä määrittelee alkuarvoksi nollan. Alkiot
  // otetaan taulukon destrukturointi syntaksilla talteen
  // muuttujiin counter ja setCounter.
  const [ counter, setCounter ] = useState(0)

  // Eriytetään nappien tahtumienkäsittelijät omiksi komponentin
  // sisältäviksi apufunktioiksi.
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)



  console.log("Rendering... ", counter)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='zero' />
      <Button handleClick={decreaseByOne} text='minus' />
    </div>
  )
}

export default App