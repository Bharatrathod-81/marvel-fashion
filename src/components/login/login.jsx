import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";

const Login = () => {

    const [passwordType, setPasswordType] = useState("password");

    const changePasswordType = () => passwordType==="password" ? 
    setPasswordType("text") : setPasswordType("password")

    return (
        <div className="main-login-container">
            <div className="login-container">
                <div className="login-heading">
                    <h2>Login</h2>
                </div>
                <div className="email-input-container">
                    <label for="email-input">Email address</label><br />
                    <input className="email-input" type="text" placeholder="@gmail.com" /><br />
                </div>
                <div className="email-input-container">
                    <label for="Password-input">Password</label><br />
                    <div className="password-container">
                        <input className="Password-input" type={passwordType} placeholder="***********" />
                        <button 
                        className="show-password-Btn"
                        onClick={changePasswordType} 
                        >Show</button>
                    </div>
                </div>
                <div className="forgot-password">
                    <div>
                        <input className="rememberMe-input" type="checkbox" />
                        <label for="rememberMe-input">Remember me </label>
                    </div>
                    <a href=""> Forgot your Password?</a>
                </div>
                <div className="email-input-container">
                    <a href="/Login/Login.html" className="card-link"><button className="login-Btn">Login</button></a>
                </div>
                <Link className="new-account" to="signup">
                    Sign up Now
                </Link>
            </div>
        </div>
    );
};

export default Login;