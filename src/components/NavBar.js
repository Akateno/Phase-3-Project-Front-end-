import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "180px",
    padding: "12px",
    margin: "6px 6px 6px",
    background: "#ffde59",
    textDecoration: "none",
    color: "black",
    borderRadius: "5px",
  };
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={{
          display: "inline-block",
          width: "180px",
          padding: "12px",
          margin: "6px 6px 6px",
          background: "#ffde59",
          textDecoration: "none",
          color: "black",
          borderRadius: "5px",
          fontFamily: "Kaushan Script",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        activeStyle={{
          background: "lightblue",
        }}
      >
        PetMatcher
      </NavLink>
      <NavLink
        style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}
        to="/adopt"
      >
        Adopt{" "}
      </NavLink>
      <NavLink
        style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}
        to="/applicants"
      >
        Applicants{" "}
      </NavLink>
    </div>
  );
}

export default NavBar;
