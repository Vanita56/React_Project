import React, { useState } from "react";
import './index.css';

const Time = ()=>{
    const state = useState();

    const time =  new Date().toTimeString();
    // console.log(time);
    const[ctime, setTime] = useState(time);
   
    const Incumm=()=>{
        // console.log("clicked ");
        let timeC =  new Date().toTimeString();
        setTime(timeC);
    }

    return(
        <>
        <div className="asd">
          
           <h1>{ctime}</h1>
          <button onClick={Incumm}>Get time</button>
        </div>
 
        </>
         
    )
}
export default Time;