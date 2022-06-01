import React from "react"
import {NavLink} from "react-router-dom";

function NavBar () {
    const linkStyles = {
        display: "inline-block",
        width: "60px",
        padding: "12px",
        margin: "6px 6px 6px",
        background: "yellow",
        textDecoration: "none",
        color: "black",
      
      };
    return (
    <div className="navbar">
        <NavLink to="/" exact style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}>
        Home</NavLink>
        <NavLink style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}to="/adopt"> 
        Adopt </NavLink>
        <NavLink style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}to="/applicants">
             Applicants </NavLink>
    </div>
    )
}

export default NavBar
