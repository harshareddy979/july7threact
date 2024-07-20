import React, { useReducer, useState } from "react";
import NavBar from "./NavBar";
import { initialState, ValuesReducer } from "./Reducer";

function HomePage(){
    var fruitsArray=["apple","banana","grapes","pineapple","orange"]
    var fruitsObject={"name":"apple","color":"red","taste":"sweet"}
    const [gender,setGender]=useState("")
    const [male,setMale]=useState(false)
    const [female,setFemale]=useState(false)
    const [values,dispatch]=useReducer(ValuesReducer,initialState)

    function updateObject(){
        fruitsObject={...fruitsObject,"weight":"1kg"}
        console.log(fruitsObject);
    }
    return(
        <div>
            <NavBar/>
            <h1>
                Welcome to HomePage {values["username"]}
            </h1>
            <button onClick={()=>{updateObject()}}>update object</button>
            <h2>gender</h2>
            <input type="radio" checked={gender === "male"} onChange={()=>{setGender("male")}}></input>
            <label>male</label>
            <input type="radio" checked={gender === "female"} onClick={()=>{setGender("female")}}></input>
            <label>female</label>
            <input type="checkbox" checked={male} onChange={()=>{setMale(true)}}></input>
            <label>male</label>
            <input type="checkbox" checked={female} onClick={()=>{setFemale(true)}}></input>
            <label>female</label>
            {gender==="male" &&
            <>
            <h2>fruits array</h2>
            {fruitsArray.map((ele,index)=>{
                return <div style={{background: ele === "apple" ?"red":"blue"}}>{ele}</div>
            })}
            </>
            }
            {gender === "female" &&
            <>
            <h2>fruits Object</h2>
            {Object.entries(fruitsObject).map(([key,value],index)=>{
                    return <div>{key+value}</div>
            })}
            {Object.keys(fruitsObject).map((key,index)=>{
                    return <div>{key}</div>
            })}
            </>
            }
        </div>
    )
}

export default HomePage;