import React, { createContext, useContext } from "react";

const UserContext=createContext();

function UseContext(){
    var a="hello"
    var b="besant"
    return(
      <UserContext.Provider value={{a,b}}> 
        <div>
            <h1>{a} use context</h1>
            <UseContext2/>
        </div>
      </UserContext.Provider>   
    )
}

function UseContext2(){
    return(
        <div>
            <h1>use context2</h1>
            <UseContext3/>
        </div>
    )
}

function UseContext3(){
    return(
        <div>
            <h1>use context3</h1>
            <UseContext4/>
        </div>
    )
}

function UseContext4(){
    const values=useContext(UserContext)
    return(
        <div>
            <h1>{values.a} {values.b} use context4</h1>
        </div>
    )
}

export default UseContext