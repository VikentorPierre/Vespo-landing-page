import { Link, NavLink } from "react-router-dom";
import "./header.css";

import React from "react";
const header2 = () => {
  return (
    <header>
      <nav className=" navbar navbar-fixed-top transparent navnav ">
        <button type="button" className="btn btn-primary join-btn">
          {/* <a href="/test/api/"> Join Our Newsletter</a> */}
          <NavLink to="/api/hello"> Join Our Newsletter </NavLink>
          {/* #callAction */}
        </button>
      </nav>
    </header>
  );
};

export default header2;
