import React, { useState } from 'react'

/*
Olin itseasiassa jo toteuttanut tämän tehtävän vaatimukset
pitkälti edellisessä vaiheessa. Muutoksena 1.9 nähden onkin
lähinnä const Displayn uudelleennimeäminen StatisticsLineksi.
*/

const StatisticsLine = ({ text, value }) => {
  // Lisää prosenttimerkin loppuun, jos
  // ollaan näyttämässä positive-kohtaa
  if (text === "positive") {
    return (
      <div>
        {text} {value} %
      </div>
    )
  }

  return (
    <div>
      {text} {value}
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

  // Shows statistics, if any have been added
  if (all > 0) {
    return(
      <div>
        <StatisticsLine text='good' value={ good } />
        <StatisticsLine text='neutral' value={ neutral } />
        <StatisticsLine text='bad' value={ bad } />
        <StatisticsLine text="all" value={ all } />
        <StatisticsLine text="average" value={ average } />
        <StatisticsLine text="positive" value={ positivePortion } />
      </div>
      )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App