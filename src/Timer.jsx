import React, { useState } from "react";
import './index.css';

const Timer = ()=>{
    const state = useState();

    const time =  new Date().toTimeString();
    const[ctime, setCTime]= useState(time);
    const UpdateTime=()=>{
        const time =  new Date().toTimeString();
        setCTime(time);
    }
    setInterval(UpdateTime, 1000)
    return(
<>
<div className="asd">
<h1>Timer</h1>
<h1>{time}</h1>
</div>
    
</>
    );
}
export default Timer;