const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
};

const Content = (props) => {
    return (
        <>
            <p>
                {props.coursework[0][0]} {props.coursework[0][1]}
            </p>
            <p>
                {props.coursework[1][0]} {props.coursework[1][1]}
            </p>
            <p>
                {props.coursework[2][0]} {props.coursework[2][1]}
            </p>
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.coursework[0][1] + props.coursework[1][1] + props.coursework[2][1]}</p>
        </>
    );
};

const App = () => {
    const course = 'Half Stack application development';
    const coursework = [
        ['Fundamentals of React', 10],
        ['Using props to pass data', 7],
        ['State of a component', 14],
    ];

    return (
        <div>
            <Header course={course} />
            <Content coursework={coursework} />
            <Total coursework={coursework} />
        </div>
    );
};

export default App;
