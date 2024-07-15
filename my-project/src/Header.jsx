import React from "react";
import {Link} from "react-router-dom"

function Header () {
    return(
        <nav>
            <div className="logo">
                <Link to = "/">Freelancesite</Link>
            </div>
            <div className="Navlinks">
                <Link to = "/jobs">Jobs</Link>
                <button className="dropbtn">Categories</button>
                <div className="dropdown-content">
                    <Link to = "/categories/design">Design</Link>
                    <Link to = "/categories/development">Development</Link>
                    <Link to = "/categories/marketing">Marketing</Link>
                </div>
             <Link to = "/post-job">Post Job</Link>
            </div>
            <div className="auth-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
            <div className="profile-notifications">
              <div className="notifications">
                <Link to="/notifications">🔔</Link>
              </div>
            <div className="dropdown">
             <button className="dropbtn">Profile</button>
             <div className="dropdown-content">
                <Link to="/profile">View Profile</Link>
                <Link to="/profile/settings">Settings</Link>
                <Link to="/logout">Logout</Link>
            </div>
            </div>
         </div>
        </nav>
    )
 
}

export default Header;
