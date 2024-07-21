import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiCalls(){
    const [apiData,setApiData]=useState();

    async function getData(){
    try{
        var response=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response.data.title);
        setApiData(response.data)
    }
    catch(e){
        console.log(e);
    }
    }

    async function postData(){
    try{
        const postData={
            "name":"besant",
            "age":"100",
            "title":"new entry created successfully"
        }
        var response=await axios.post("https://jsonplaceholder.typicode.com/posts",postData)
        console.log(response);
        setApiData(response.data)
    }
    catch(e){
        console.log(e);
    }
    }

    async function putData(){
        try{
            const putData={
                    "userId": 988,
                    "id": 1,
                    "title":"details updated successfully",
                    "body": "quia et suscip",
            }
            var response=await axios.put("https://jsonplaceholder.typicode.com/posts/1",putData)
            console.log(response);
            setApiData(response.data)
        }
        catch(e){
            console.log(e);
        }
        }

    async function deleteData(){
        try{
            var response=await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            console.log(response);
            setApiData(response.data)
        }
        catch(e){
            console.log(e);
        }
        }

    // useEffect(()=>{
    //     getData()
    // },[])

    return(
        <div>
            <h1>Api Calls</h1>
            {apiData && apiData.title}
            <button onClick={()=>{getData()}}>getData</button>
            <button onClick={()=>{postData()}}>postData</button>
            <button onClick={()=>{putData()}}>putData</button>
            <button onClick={()=>{deleteData()}}>deleteData</button>
        </div>    
    )
}

export default ApiCalls