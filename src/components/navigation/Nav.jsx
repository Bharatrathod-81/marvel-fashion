import React from "react";
import { useState  } from "react";
import { Link } from "react-router-dom";
import "../navigation/Nav.css";
import { useFilteredProduct } from "../../contexts/filter-product-Context";


const Navigation = () => {
    const [inputValue, setInputValue] = useState("");

    const { dispatchProductState } = useFilteredProduct();

    return(
        <nav className="nav-body">
        <ul className="list-col-left">
            <li className="logo"><Link to="/" className="logo1" >MARVEL<span className="logo2"> Fashion</span></Link></li>
            <li className="atribute input-container">
                <input 
                className="search-input" 
                type="text" 
                placeholder="Search"
                onChange={event => dispatchProductState({type:"SEARCH_QUERY",payload:event.target.value})}
                />
               
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