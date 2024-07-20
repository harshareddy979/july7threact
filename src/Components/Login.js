import React, { useReducer, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { initialState, ValuesReducer } from "./Reducer";

function LoginPage(){
    const [loginUserName,setUserName]=useState("")
    const [loginPassword,setPassword]=useState("")
    const naviagate=useNavigate()
    const [values,dispatch]=useReducer(ValuesReducer,initialState)

    function checkLoginDetails(){
        if(loginUserName === values["username"] ){
                if(loginPassword === values["password"]){
                    alert("Login Sucess")
                    naviagate("/homepage")
                }else{
                    alert("password is not matching with register page")
                }
        }else{
            alert("username is not matching with register page")
        }
    }

    return(
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
            {/* {props.registerUserName+props.registerPassword} */}
            <h1>Login Page</h1>
            <label>username</label>
            <input type="text" value={loginUserName} onChange={(e)=>{setUserName(e.target.value)}}></input>
            <label>password</label>
            <input type="password" value={loginPassword} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>{checkLoginDetails()}}>Login</button>
        </div>
        </div>
    )
}

export default LoginPage;