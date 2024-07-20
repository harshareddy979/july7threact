import React from "react";
import App from './App';
import "./firstComponent.css";

function FirstComponent(){

    var a=10;

    return(
        <div className="main">
            <h1 style={{color:"red"}}>this is first componet {a}</h1>
            <input></input>
            <label>username</label>
            <button>submit</button>
            <App></App>
        </div>
    )
}

export default FirstComponent;