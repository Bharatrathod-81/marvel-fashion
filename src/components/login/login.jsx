import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginValidChecker } from "../../utils/MailPasswordChecker";
import { useAuthContext } from "../../contexts/auth-context";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { dispatchWishlistCart } = useWishlistCartContext();
    const [showPassword, setShowPassword] = useState(false);
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState({ isError: true })
    const { Login, isLogin } = useAuthContext();

    useEffect(() => {
        if (!error.isError) {
            Login(loginDetails, dispatchWishlistCart);
        }
    },[error]);
    

    useEffect(() => {
        if (isLogin.user && location.state !== null) {
            navigate(location.state.pathname)
        }
    }, [isLogin, error]);

    const inputHandler = (e) => {
        const { name, value } = e;
        setLoginDetails({ ...loginDetails, [name]: value })
    }

    const submitFunc = () => {
        const error = LoginValidChecker(loginDetails);
        setError(error)
    }

    return (
        <div className="main-login-container">
            <div className="login-container">

                <div className="login-heading">
                    <h2>Login</h2>
                </div>

                <div className="email-input-container">
                    <label for="email-input">Email address</label>
                    <input
                        className="email-input"
                        name="email"
                        value={loginDetails.email}
                        type="text" placeholder="xyz@gmail.com"
                        required
                        onChange={(e) => inputHandler(e.target)}
                    />
                </div>
                {error.email && <div className="wrong-input">{error.email}</div>}

                <div className="email-input-container">
                    <label for="Password-input">Password</label>
                    <div className="password-container">
                        <input
                            className="Password-input" type={showPassword ? "text" : "password"}
                            name="password"
                            value={loginDetails.password}
                            placeholder="***********"
                            required
                            onChange={(e) => inputHandler(e.target)}
                        />
                        <button
                            className="show-password-Btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >Show</button>
                    </div>
                    {error.password && <div className="wrong-input">{error.password}</div>}
                </div>

                <div className="forgot-password">
                    <div>
                        <input className="rememberMe-input" type="checkbox" />
                        <label for="rememberMe-input">Remember me </label>
                    </div>
                    <a href=""> Forgot your Password?</a>
                </div>

                <div className="email-input-container">
                    <button
                        className="login-Btn"
                        onClick={submitFunc}
                    >
                        Login
                    </button>
                </div>

                <div className="email-input-container">
                    <button
                        className="login-Btn"
                        onClick={() => {
                            setError({ isError: false });
                            setLoginDetails({
                                email: "bharat678@gmail.com",
                                password: "bharat12",
                            })
                        }}
                    >Login as a Guest</button>
                </div>

                <Link className="new-account" to="/signup">
                    Sign up Now
                </Link>
            </div>
        </div>
    );
};

export default Login;
