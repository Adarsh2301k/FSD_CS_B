import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/refex">Use refex example</Link>
            </li>
            <li>
                <Link to="/contextex">Use contextex example</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home