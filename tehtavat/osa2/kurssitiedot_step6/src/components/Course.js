import React from 'react'

const Header = (props) => {
    console.log(props.course.name)
    return (
      <div>
        <h1>
          {props.course.name}
        </h1>
      </div>
    )
  }
  
  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          {props.part.name}: {props.part.exercises}
        </p>
      </div>
    )
  }
  
  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          <Part part={props.parts[0]} />
          <Part part={props.parts[1]} />
          <Part part={props.parts[2]} />
        </p>
      </div>
    )
  }
  
  const Total = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          {props.total[0]['exercises'] + props.total[1]['exercises'] + props.total[2]['exercises']}
        </p>
      </div>
    )
  }

const Course = ({ course }) => {
    console.log(course)
    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts} /> 
            <Total total={course.parts} />
        </div>
    )
}

export default Course