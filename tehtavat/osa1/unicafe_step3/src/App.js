import React, { useState } from 'react'

const Display = ({ text, counter }) => {
  // Lisää prosenttimerkin loppuun, jos
  // ollaan näyttämässä positive-kohtaa
  if (text === "positive") {
    return (
      <div>
        {text} {counter} %
      </div>
    )
  }

  return (
    <div>
      {text} {counter}
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

const Statistics = ({ good, neutral, bad }) => {
  const average = (good*1+neutral*0+bad*(-1))/(good+neutral+bad)
  const positivePortion = (good/(good+neutral+bad)) * 100
  const all = good+neutral+bad

  return(
  <div>
    <Display text='good' counter={ good } />
    <Display text='neutral' counter={ neutral } />
    <Display text='bad' counter={ bad } />
    <Display text="all" counter={ all } />
    <Display text="average" counter={ average } />
    <Display text="positive" counter={ positivePortion } />
  </div>
  )
}

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
      {/* <Display counter={good} text={'good'} />
      <Display counter={neutral} text={'neutral'} />
      <Display counter={bad} text={'bad'} /> */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App