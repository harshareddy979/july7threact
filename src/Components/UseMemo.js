import React, { useMemo, useState } from "react";

function UseMemo(){
    
    const [count,setCount]=useState(0)
    const calculatedValue=useMemo(()=>bigCalculation(count),[count]);
    const [name,setName]=useState("");
    return(
        <div>
            <h1>Use Memo</h1>
            {"calculated value is: "+calculatedValue}
            <br></br>
            {count}
            <button onClick={()=>{setCount(count+1)}}>Update count</button>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
    )
}

function bigCalculation(n){
    console.log("calculation function is getting called");
    for(let i=0;i<=10;i++){
        n=n+1;
    }
    return n;
}

export default UseMemo;