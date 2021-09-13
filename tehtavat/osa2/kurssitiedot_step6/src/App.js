import React from 'react'
import Course from './components/Course'

// Tehtävä 1.3, Kurssitiedot käyttää olioita

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  }

  
  return (
    <div>
      <Course course={course} />
    </div>
  )
}


//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} /> 
//       {/* Huom kuinka tässä luotiin uusi lista
//       nimeltä tota. Tämä sekoitti hirveän pitkään */}
//       <Total total={course.parts} />
//     </div>
//   )
// }

export default App