import React from "react";
import "../navigation/Nav.css";


const Navigation = () => {


    return(
        <nav className="nav-body">
        <ul className="list-col-left">
            <li className="logo"><a className="logo1" href="/index.html">MARVEL<span className="logo2"> Fashion</span></a></li>
            <li className="atribute input-container">
                <input className="search-input" type="text" placeholder="Search"></input>
                <button className="searchBtn">&#128269;</button>
            </li>
            <ul className="list-col-right">
                <li><a className="atribute login-btn" href="/">Login</a></li>
                <li><a className="atribute badge" href="/">
                    <div>	&#10084;</div>
                    <div className = "Badge1" ></div>
                </a></li>
                <li><a className="atribute badge" href="/">
                    <div >&#128722;</div>
                    <div className = "Badge1" ></div>
                </a></li>
            </ul>
        </ul>
    </nav>
    );
};

export default Navigation ;