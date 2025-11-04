const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {
        props.parts.map(data => 
          <Part key={data.name} part={data.name} exercise={data.exercise} /> 
        )
      }
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: part1,
        exercise: exercises1,
      },
      {
        name: part2,
        exercise: exercises2,
      },
      {
        name: part3,
        exercise: exercises3,
      },
    ],
    total: exercises1 + exercises2 + exercises3, 
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.total} />
    </div>
  )
}

export default App