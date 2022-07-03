import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const authContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState({
        user:localStorage.getItem("user"),
        token:localStorage.getItem("token")
    });
    
    // for login
    const Login = async ({ email, password }, dispatch) => {
        try{
            const { data, status } = await axios.post("/api/auth/login", { email, password });
            localStorage.setItem("token", data.encodedToken);
            localStorage.setItem("user", data.foundUser.firstName);
            setIsLogin({...isLogin,user:data.foundUser.firstName});

            if (status === 200){
                toast.success(`Welcome Back ${data.foundUser.firstName}`)
                dispatch({type: "RE_LOGIN", payload:data.foundUser})
            }
        } catch (err){
            console.log(err);
            toast.error("Failed To Login")
        }
    };

    // for signup
    const Signup = async ({firstName, lastName, email, password}) => {
        try{
            const { data, status } = await axios.post("/api/auth/signup",
            {
                firstName,
                lastName,
                email,
                password
            }
            );
            localStorage.setItem("token", data.encodedToken);
            localStorage.setItem("user", data.createdUser.firstName);
            setIsLogin({...isLogin,user:data.createdUser.firstName});

            if (status === 201){
                toast.success(`Welcome ${data.createdUser.firstName}`)
            }
        } catch (err) {
            console.log(err)
            toast.error("Failed To Singup")
        }
    };

    // for logout
    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLogin({...isLogin,user:false})
        toast.info("Successfully Logout")
    }

    return(
        <authContext.Provider value={{Login, Signup, Logout, isLogin}}>
            { children }
        </authContext.Provider>
    )
};

export const useAuthContext = () => useContext(authContext);
