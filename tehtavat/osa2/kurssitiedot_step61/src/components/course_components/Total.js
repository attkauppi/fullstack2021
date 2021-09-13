import React from 'react'

const Total = ({parts}) => {

    // Lähde: https://stackoverflow.com/questions/60170999/how-to-count-the-sum-of-values-in-an-array-of-objects-in-javascript
    // const parts = props.total
    const sumTotal = parts =>
        parts.reduce((sum, { exercises }) => sum + exercises, 0)
    console.log("Sum total")    

    const total = sumTotal(parts)
    console.log(total)


    return (

      <div>
        <p>
          {total}
        </p>
      </div>
    )
  }
  
export default Total