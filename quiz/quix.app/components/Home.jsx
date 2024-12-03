import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home;