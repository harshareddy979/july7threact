import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"grey",height:"10vh"}}>
            <Link to="/">Main</Link>
            <Link to="/register">register</Link>
            <Link to="/login">Login</Link>
            <Link to="/homePage">HomePage</Link>
            <Link to="/contact">ContactPage</Link>
        </div>
    )
}


export default NavBar;