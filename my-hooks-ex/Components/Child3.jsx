import React, { useContext } from 'react'
import { StudentContext } from './Contextex';

const Child3 = () => {
    const student=useContext(StudentContext);
  return (
    <div>
        <h2>Child3 component</h2>
        <h2>
            Name={student.name}<br/>
            Age={student.age}<br/>
        </h2>
    </div>
  )
}

export default Child3