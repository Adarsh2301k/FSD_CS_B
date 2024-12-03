
import Counter from './components/Counter'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/login' element={<h1>Login Page</h1>}></Route>
      <Route path='/logout' element={<h1>Logout Page</h1>}></Route>
      <Route path='*' element={<h2>No page AVailable</h2>}></Route>
    </Routes>
    </>
  )
}

export default App