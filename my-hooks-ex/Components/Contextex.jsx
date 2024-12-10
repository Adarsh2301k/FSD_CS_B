import React, { createContext } from 'react'
import Child1 from './Child1'


const StudentContext = createContext();

const Contextex = () => {
    const stu={
        name:"XYS",
        age:20
    }
  return (
    <div>
        <StudentContext.Provider value={stu}>

        
        <h1>Parent Component</h1>
        <Child1 /></StudentContext.Provider>
    </div>
  )
}

export default Contextex
export {StudentContext}