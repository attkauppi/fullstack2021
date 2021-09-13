import React from 'react'
import Header from './course_components/Header'
import Content from './course_components/Content'
import Total from './course_components/Total'

  


const Course = ({ course }) => {
    console.log(course)
    return(
        <div>
            <Header name={course.name} />
            <Content key={course.id} course={course} />
              {/* {course.parts.map(part =>
                <Part key={part.id} part={part} />
              )} */}
            
            <Total parts={course.parts} />
        </div>
    )
}

export default Course