import React, {useState} from "react";

const Forms=()=>{
    const state=useState();
    const purple= "#8e44ad"; 
    const [cpage,setPage]=useState(purple);
    const [name, setName]=useState("click me");
    const bgChange=()=>{    
        var newbg="#34495e";
        setPage(newbg);
        setName("Ouch 🤐");
    }
    const bgBack=()=>{
  var bg= 'puple';
        setPage(bg);
    
        setName("AYYOY 😠");
    }
    return(
        <div className="asd" style={{backgroundColor: cpage}}>
{/* <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button> */}
<button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
        </div>

    )
}
export default Forms;