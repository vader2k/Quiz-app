

const Results = () => {
  const score = localStorage.getItem('score')
  return (
    <div>{score}</div>
  )
}

export default Results