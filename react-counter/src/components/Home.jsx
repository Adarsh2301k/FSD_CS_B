import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <ul>
            <li><Link to="/counter"> Counter App</Link></li>
            <li><Link to="/stopwatch">Stopwatch App</Link> </li>
        </ul>

    </div>
  )
}

export default Home