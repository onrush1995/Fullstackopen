import { useState } from 'react';

const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

//Half stack calculation
const halfStack= courses.map(x=>x.parts.map(y=><div id={y}>{y.name} - {y.exercises}</div>));
const halfStackx= courses.map(x=>x.parts.map(y=>y.exercises));
const totalHalfStack= halfStackx[0].reduce((acc,item)=> acc + item,0);

// Node Js calculation
const nodeJs= courses.map(x=>x.parts.map(y=><div id={y}>{y.name} - {y.exercises}</div>));
const nodeJsx= courses.map(x=>x.parts.map(y=>y.exercises));
const totalNodeJs= nodeJsx[1].reduce((acc,item)=> acc + item,0);


return(<div>
    <h1>Web development curriculum</h1>
    <h2>{courses[0].name}</h2>
    <h2>{halfStack}</h2>
    <h2> Total of {totalHalfStack} exercises</h2>
    <h2>{courses[1].name}</h2>
    <h2>{nodeJs}</h2>
    <h2> Total of {totalNodeJs} exercises</h2>
</div>)
}

export default App;
