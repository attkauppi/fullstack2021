import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [points, setPoints] = useState(Array.apply(null, new Array(10)).map(Number.prototype.valueOf,0))
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    const random = Math.floor(Math.random() * (Math.ceil(anecdotes.length-1) - Math.floor(0) + 1) + 0)
    setSelected(random)
    console.log(selected)
  }

  const handleVote = () => {
    const newPoints = [ ...points ]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
  

  return (
    <div>
      <p>
      {anecdotes[selected]}
      </p>
      <p>
      has {points[selected]} votes
      </p>
      <Button handleClick={handleClick} text='get anecdote' />
      <Button handleClick={handleVote} text='vote' />
    </div>
  )
}

export default App