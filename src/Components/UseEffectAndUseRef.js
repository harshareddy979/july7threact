import React, { useEffect, useRef } from "react";

function ReactHooks(){
    const fileRef=useRef();
    const inputRef=useRef()

    useEffect(()=>{
        // alert("this is hooks page")
        console.log("use effect is called");
    },[])

    return(
        <div>
            <h1>Use Ref</h1>
            <input type="file" ref={fileRef}></input>
            <input type="text" ref={inputRef}></input>
            <button onClick={()=>{fileRef.current.click()}}>duplicate file</button>
            <button onClick={()=>{inputRef.current.focus()}}>focus</button>
            <h1>UseEffect</h1>
        </div>
    )
}

export default ReactHooks