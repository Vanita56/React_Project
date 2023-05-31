import React, { useState } from "react";
import './index.css';

const App = ()=>{
    const state = useState;
    // console.log(state);
const [count, setCount]= useState(0);

const Incum =()=>{
    setCount(count+1);
    //  console.log("clicked " +count++);
}
  return(
        <>
        <div className="asd">
           <h1>{count}</h1>
          <button onClick={Incum}>Click Me</button>
        </div>
 
        </>
         
    )
}
export default App;