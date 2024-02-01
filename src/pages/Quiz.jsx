import { useState, useEffect } from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { quiz } from "..";
import Timer from "../component/Timer";
import bg from '../assets/jack.jpg'
import { GiRun } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Quiz = () => {

  const [toggle, settoggle] = useState(true);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  },[])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
  },[theme])

  const handleThemeSwitched = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const navigate = useNavigate();
//a function to check if timer has gotten to zero
  const handleTimerEnd = () => {
    // Handle timer end, navigate to the score page, etc.
    navigate('/result');
  };

  // getting my username back from local storage
  const username = localStorage.getItem('username')
  //getting the question length and current question
  const numberOfQuestions = quiz.length
  const [ score, setScore ] = useState(0)
  const [ questionNumber, setQuestionNumber ] = useState(1)
  const [ question, setQuestion ] = useState(null)
  const [ selectedAnswer, setSelectedAnswer ] = useState(null)

  const handleAnswer =(a)=> {
    setSelectedAnswer(a)
     if (a.correct === true) {
      setScore(score + 1)
      setSelectedAnswer(null)

      //storing my score in my localstorage
      localStorage.setItem('score', score + 1);
      setTimeout(()=> {
        setQuestionNumber(prev=>prev+1)
      },3000)
     } else{
      setSelectedAnswer(null)
      setTimeout(()=> {
        setQuestionNumber(prev=>prev+1)
      },3000)
     }
  }

  const handleExit = () => {
    navigate('/result')
  }

  useEffect(()=> {
    setQuestion(quiz[questionNumber - 1])
  },[questionNumber])

  useEffect(() => {
    if (questionNumber > numberOfQuestions) {
      // If all questions are answered, navigate to the result page
      navigate('/result');
    } else {
      setQuestion(quiz[questionNumber - 1]);
    }
  }, [ questionNumber, navigate, numberOfQuestions]);

  
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <img src={bg} alt="background_image" />
      </div>
      {/* quiz body */}
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex justify-between items-centerbg-black">
          <h1
            className="font-Roboto text-[1rem] font-bold"
            >Welcome to the Quiz <span className="font-Raleway blue_gradient">{username}</span>
          </h1>

          <div onClick={()=> settoggle((prev)=>(!prev))}>
            {
              toggle ? <FaMoon onClick={handleThemeSwitched}/> : <FaSun onClick={handleThemeSwitched}/>
            }
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-medium">{questionNumber} of {numberOfQuestions}</div>
          <div className="text-[2rem] border-2 rounded-full h-[80px] w-[80px] border-blue-500  flex items-center justify-center">
            <Timer  
              questionNumber={questionNumber} 
              onTimerEnd={handleTimerEnd}
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold">SCORE 👍: <span>{score}</span></h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full bg-gray-200 p-10 text-center font-medium">
            {question?.question}
          </div>
          <div className="">
            {question?.answers.map((a, index)=>(
              <div
                className={`${selectedAnswer === a ? 'bg-blue-300': ''} border p-5 font-Roboto text-[0.85rem] cursor-pointer mt-3 hover:bg-blue-300`}
                key={index}
                onClick={()=>handleAnswer(a)}
                >
                {a.options}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleExit}
          className="flex items-center justify-center gap-2 text-red-500 border-red-500 border hover:bg-red-500 hover:text-white p-3 w-fit m-auto text-[0.85rem] font-medium"
        >
          <p>Give Up!</p>
          <GiRun/>
        </button>
      </div>
    </div>
  )
}

export default Quiz