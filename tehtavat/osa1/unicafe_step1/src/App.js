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

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick= () => {
    setBad(bad + 1)
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
    </div>
  )
}

export default App