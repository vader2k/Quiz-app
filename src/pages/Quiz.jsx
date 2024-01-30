import { useState, useEffect } from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { Questions } from "..";
import Timer from "../component/Timer";
import bg from '../assets/jack.jpg'

const Quiz = () => {
  // getting my username back from local storage
  const username = localStorage.getItem('username')
  const numberOfQuestions = Questions.length
  const [ score, setScore ] = useState(0)
  
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
          <div className="font-medium">1 of {numberOfQuestions}</div>
          <Timer />
        </div>
        <div>
          <h1 className="font-bold">SCORE 👍: <span>{score}</span></h1>
        </div>

        <div>
          
        </div>
      </div>

    </div>
  )
}

export default Quiz