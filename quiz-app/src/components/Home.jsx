import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Quiz from './Quiz'

function increase(){
  console.log("Button click");
}

const Home = () => {
  return (
    <div>
        <Header/>
        <Quiz name={increase}></Quiz>
        
        <Footer/>
    </div>
  )
}
export default Home

