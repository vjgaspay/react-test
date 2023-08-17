import { useContext } from "react";
import { Link } from "react-router-dom";

import { WebsiteContext } from "../hooks/context/WebsiteContext";

const NavBar = () => {
    const { context_userID, context_fullName } = useContext(WebsiteContext);

    const [ userID, setUserID ] = context_userID;
    const [ fullName, setFullName ] = context_fullName;

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link <% if(title === 'Home') { %> active <% } %>" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link <% if(title === 'About') { %> active <% } %>" to="/about">About</Link>
                    </li>
                {/* <% if( !isAuthenticated ) { %> */}
                    <li className="nav-item">
                        <Link className="nav-link <% if(title === 'Register') { %> active <% } %>" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link <% if(title === 'Login') { %> active <% } %>" to="/login">Login</Link>
                    </li>
                {/* <% } %>
                <% if( isAuthenticated ) { %> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link <% if(title === 'Profile') { %> active <% } %>" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Log Out</Link>
                    </li> */}
                {/* <% } %> */}
                </ul>

                <span style={{ color: "white" }}>Welcome {fullName}! Your id is {userID}</span>
                <button onClick={ () => setFullName("John G.") }>Change name</button>
            </div>
        </nav>
    );
}

export default NavBar;