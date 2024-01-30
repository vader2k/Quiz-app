import { useState, useEffect } from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { quiz } from "..";
import Timer from "../component/Timer";
import bg from '../assets/jack.jpg'


const Quiz = () => {
  // getting my username back from local storage
  const username = localStorage.getItem('username')
  //getting the question length and current question
  const numberOfQuestions = quiz.length
  const [ score, setScore ] = useState(0)
  const [ stopTimer, setStopTimer ] = useState(false)
  const [ questionNumber, setQuestionNumber ] = useState(1)
  const [ question, setQuestion ] = useState(null)
  const [ selectedAnswer, setSelectedAnswer ] = useState(null)

  useEffect(()=> {
    setQuestion(quiz[questionNumber - 1])
  },[quiz, questionNumber])
  
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

          <div>
            <FaMoon />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-medium">{questionNumber} of {numberOfQuestions}</div>
          <Timer />
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
                className="border p-5 font-Roboto text-[0.85rem] cursor-pointer mt-3 hover:bg-gray-200" 
                key={index}
                >
                {a.options}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz