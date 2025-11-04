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
        {props?.part} {props?.part}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props?.parts?.part1} exercise={props?.parts?.exercises1} />
      <Part part={props?.parts?.part2} exercise={props?.parts?.exercises2} />
      <Part part={props?.parts?.part3} exercise={props?.parts?.exercises3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props?.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const allParts = {
    part1,
    part2,
    part3
  };
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const allExercise = {
    exercises1,
    exercises2,
    exercises3
  }
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content parts={allParts} exercise={allExercise} />
      <Total total={total} />
    </div>
  )
}

export default App