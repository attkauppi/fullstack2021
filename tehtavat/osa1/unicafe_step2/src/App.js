import React, { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      {props.text} {props.counter}
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>
        give feedback
      </h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePortion, setPositivePortion] = useState(0)
  const [counter, setCounter] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setCounter(counter + 1)
    setAverage((good*1+neutral*0+bad*(-1))/(good+neutral+bad))
    setPositivePortion(good/(counter))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setCounter(counter + 1)
    setAverage((good*1+neutral*0+bad*(-1))/(good+neutral+bad))
    setPositivePortion(good/(counter))
  }

  const handleBadClick= () => {
    setBad(bad + 1)
    setCounter(counter + 1)
    setAverage((good*1+neutral*0+bad*(-1))/(good+neutral+bad))
    setPositivePortion(good/(counter))
  }


  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Display counter={good} text={'good'} />
      <Display counter={neutral} text={'neutral'} />
      <Display counter={bad} text={'bad'} />
      <Display counter={average} text={'average'} />
      <Display counter={positivePortion} text={'positive'} />
    </div>
  )
}

export default App