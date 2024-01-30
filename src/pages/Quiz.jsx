import { useState, useEffect } from "react"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";


const Quiz = () => {
  // getting my username back from local storage
  const username = localStorage.getItem('username')
  const numberOfQuestions = data.length
  
  return (
    <div className="flex flex-col gap-8 p-5 w-[1280px]">
      <div className="flex justify-between items-centerbg-black">
        <h1
           className="font-Roboto text-[1rem] font-bold"
           >Welcome to the Quiz, <span className="font-Raleway blue_gradient">{username}</span>
        </h1>

        <div>
          <FaMoon />
        </div>
      </div>

        <div>
          {numberOfQuestions}
        </div>
    </div>
  )
}

export default Quiz