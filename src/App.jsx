const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

const App = () => {

    const part1 = {
    name: 'Introduction to ReactJS',
    exercises: 10
  }

  const part2 = {
    name: 'Fundamentals of ReactJS',
    exercises: 7
  }

  const part3 = {
    name: 'ReactJS Anatomy',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App