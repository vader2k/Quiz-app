import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Results from "../pages/Results";


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/result" index element={<Results/>}/>
        </Routes>
    </div>
  )
}

export default Routing