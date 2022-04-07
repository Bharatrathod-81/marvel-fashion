import "./sign-up.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {

    const [passwordType, setPasswordType] = useState("password");

    const changePasswordType = () => passwordType==="password" ? 
    setPasswordType("text") : setPasswordType("password")

    return (
        <div className="main-body">
            <div class="signup-body">
                <div className="signup-container">
                    <div className="signup-heading">
                        <h2>Signup</h2>
                    </div>
                    <div className="name-input-container">
                        <label for="name-input">Full Name</label><br />
                        <input className="name-input" type="text" placeholder="Enter" /><br />
                    </div>
                    <div className="email-input-container">
                        <label for="email-input">Email address</label><br />
                        <input className="email-input" type="text" placeholder="@gmail.com" /><br />
                    </div>
                    <div className="email-input-container">
                        <label for="Password-input">Password</label><br />
                        <div className="password-container">
                           <input className="Password-input" type={passwordType} placeholder="***************" />
                           <button 
                              className="show-password-Btn"
                              onClick={changePasswordType} 
                              >Show</button>
                        </div>
                    </div>
                    <div className="email-input-container">
                        <label for="Password-input">Confirm Password</label><br />
                        <div className="password-container">
                           <input className="Password-input" type={passwordType} placeholder="***************" />
                           <button 
                              className="show-password-Btn"
                              onClick={changePasswordType} 
                              >Show</button>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <div>
                            <input className="rememberMe-input" type="checkbox" />
                            <label for="rememberMe-input">I accept all Terms & Conditions</label>
                        </div>
                    </div>
                    <div className="email-input-container">
                        <a href="" className="card-link"><button className="signup-Btn">Create New Account</button></a>
                    </div>
                    <Link to="/login" className="new-account">
                        Already have an account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;