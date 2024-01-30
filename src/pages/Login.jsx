import picture from '../assets/quiz-bg.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [ username, setUsername ] = useState("")
  const [ invalidName, setInvalidName ] = useState(false)

  const startQuiz = (e) => {
    e.preventDefault();
    if (username.length === 0 ) {
      setInvalidName(true)
    } else {
      navigate('/quiz')
    }
  }

  return (
    <div className='flex flex-col text-center items-center gap-8'>
      <img 
        className='h-[400px]' 
        src={picture} />

      <h1 
        className='text-[2.5rem] font-black blue_gradient'
        >
          Welcome To Simple <br/> React Quiz App
      </h1>

      <form 
        className='relative flex flex-col gap-5'
      >
        <p className='absolute font-Roboto font-medium text-[0.8rem] text-gray-600 top-[-20px]'>Name</p>
        <input 
          type="text" 
          value={username}
          placeholder='Enter name...'
          className='h-[40px] min-w-[400px] border border-blue-100 px-5 text-[0.9rem] focus:border-blue-500 outline-none'
          onChange={(e)=>{setUsername(e.target.value)}}
        />

        {invalidName && (
          <div>
            <p>Please enter a valid username</p>
          </div>
        )}

        <button 
          className='start-btn p-3 border-blue-500 border max-w-[150px] m-auto text-[0.9rem] font-medium hover:bg-blue-500 hover:text-white'
          onClick={(e)=>startQuiz(e)}
          >
            Start Quiz 🥇
        </button>
      </form>

        
    </div>
  )
}

export default Login