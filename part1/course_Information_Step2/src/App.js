const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
        ]
    };

    return (
        <div>
            <h1>{course.name}</h1>
            <p>{course.parts[0].name}</p>
            <p>{course.parts[1].name}</p>
            <p>{course.parts[2].name}</p>
            <p>
                Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
            </p>
        </div>
    );
};

export default App;
