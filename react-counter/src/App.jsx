import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Counter from "./components/Counter"
import Stopwatch from "./components/Stopwatch"

const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/stopwatch" element={<Stopwatch/>}></Route>
        <Route path="*" element={<h1>no page available</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App