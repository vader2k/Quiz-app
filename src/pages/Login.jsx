import picture from '../assets/quiz-bg.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaQuestionCircle } from "react-icons/fa";

const Login = () => {

  const navigate = useNavigate()

  const [ username, setUsername ] = useState("")
  const [ invalidName, setInvalidName ] = useState(false)
  const [ instructions, setInstructions ] = useState(false)

  const startQuiz = (e) => {
    e.preventDefault();
    if (username.length === 0 ) {
      setInvalidName(true)
    } else {
      // Store username in local storage
      localStorage.setItem('username', username);
      // Navigate to the '/quiz' page
      navigate('/quiz')
    }
  }

  const handleInstructions = () => {
    setInstructions((prev) => (!prev))
  }

  return (
    <div className='flex flex-col text-center items-center gap-8 relative'>
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
            <p className='text-[0.85rem] text-red-500'>Please enter a valid username</p>
          </div>
        )}

        <button 
          className='start-btn p-3 border-blue-500 border max-w-[150px] m-auto text-[0.9rem] font-medium hover:bg-blue-500 hover:text-white'
          onClick={(e)=>startQuiz(e)}
          >
            Start Quiz 🥇
        </button>
      </form>
        
        {/* question and instruction menu */}
        <div 
          className='absolute right-0 bottom-[-100px]'>
            <FaQuestionCircle 
              className='text-blue-300 text-[1.8rem] cursor-pointer'
              onClick={handleInstructions}/>
        </div>

        {
          instructions && (
            <div className='absolute bottom-0 right-0 h-[250px] bg-blue-100 w-[300px] z-10 p-5'>
              <div className='text-justify text-[0.85rem] flex flex-col gap-3'>
                <h1 className='font-bold font-Roboto'>Welcome to simple react quiz</h1>
                <p>There are 30 questions in total, each of them having four options for you to choose from, and a timer for each question</p>
                <p>Once the timer runs out, your quiz will automatically be submitted regardless of your progress</p>
                <p className='text-yellow-500 font-bold'>Goodluck Wizards 🪄</p>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default Login