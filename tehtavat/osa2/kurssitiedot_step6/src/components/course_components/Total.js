import React from 'react'

const Total = ({parts}) => {

    const sumTotal = parts =>
        parts.reduce((sum, { exercises }) => sum + exercises, 0)
    console.log("Sum total") 

    const total = sumTotal(parts)
    console.log(total)


    return (

      <div>
        <p>
          <b>total of {total} exercises</b>
        </p>
      </div>
    )
  }
  
export default Total