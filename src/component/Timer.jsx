import { useEffect, useState } from "react"


const Timer = ({ questionNumber, onTimerEnd }) => {

    const [ timer, setTimer ] = useState(30);

    useEffect(()=> {
        if (timer === 0) {
            onTimerEnd(); // Notify the parent component when the timer reaches zero
          }
        const interval = setInterval(()=>{
            setTimer(timer - 1)
        },1000)
        return () => clearInterval(interval)
    },[ timer, onTimerEnd])

    useEffect(()=> {
        setTimer(30)
    },[questionNumber])
  return timer
}

export default Timer