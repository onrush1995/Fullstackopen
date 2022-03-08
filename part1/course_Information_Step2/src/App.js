const App = (props) => {
    const course = 'Half Stack application development';
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];

    return (
        <div>
            <h1>{course}</h1>
            <p>{parts[0].name}</p>
            <p>{parts[1].name}</p>
            <p>{parts[2].name}</p>
            <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        </div>
    );
};

export default App;
