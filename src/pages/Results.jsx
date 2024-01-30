import high from '../assets/high.jpg'
import low from '../assets/low.jpg'

const Results = () => {
  const username = localStorage.getItem('username')
  const score = localStorage.getItem('score')
  return (
    <div className='flex flex-col gap-10 text-center'>
      <img 
        src={score >= 15 ? high : low} 
        alt="ending" 
        className='h-[400px]'/>
      <h1 className='text-[1.5rem] font-medium'>Welcome to the end of the quiz. <span className='blue_gradient'>{username}</span></h1>
      <p>I hope you learnt alot from it and took notes of what you dont know</p>
      <p>you scored : <span className='font-semibold text-gray-600 text-[1.5rem]'>{score}</span> out of 30 questions</p>
      {
        score >=15 &&(
          <div className='text-gray-400 text-[1.5rem]'>
            You are awesome 🥇
          </div>
        )
      }
      {
        score <=14 && (
          <div className='text-red-400 text-[1.3rem]'>
            Buddy, go back to the drawing board for real, 
            youre a waste of space atp! <br/>
            Fuck!!!
          </div>
        )
      }
    </div>
  )
}

export default Results