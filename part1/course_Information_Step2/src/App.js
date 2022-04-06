import { useState } from 'react';

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
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
        }
      ]
    }

  const propsName = course.parts.map(x=><div>{x.name}-{x.exercises}</div>);
  const exercisesCount=course.parts.map(exr=> exr.exercises)
  const total = exercisesCount.reduce((acc,item)=> acc+item,0)

return(<div>
    <h1>{course.name}</h1>
    <div>{propsName} </div>
    <h2>Total of {total} exercises</h2>
</div>)
}

export default App;
