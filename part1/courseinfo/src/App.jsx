const App = () => {
    const course = 'Half Stack application development';
    const coursework = [
        ['Fundamentals of React', 10],
        ['Using props to pass data', 7],
        ['State of a component', 14],
    ];

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {coursework[0][0]} {coursework[0][1]}
            </p>
            <p>
                {coursework[1][0]} {coursework[1][1]}
            </p>
            <p>
                {coursework[2][0]} {coursework[2][1]}
            </p>
            <p>Number of exercises {coursework[0][1] + coursework[1][1] + coursework[2][1]}</p>
        </div>
    );
};

export default App;
