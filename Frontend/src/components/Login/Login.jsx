import { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { Store } from '../../context/Store';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setSLogin }) => {
    const { url, setToken } = useContext(Store);
    const [curState, setCurState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const onLogin = async (event) => {
        event.preventDefault();

        if (!validateEmail(data.email)) {
            toast.error("Please Enter a valid Email Address");
            return;
        }

        if (data.password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;
        }

        if (curState === "Sign Up" && (!data.name || data.name.trim().length === 0)) {
            toast.error("Name is required");
            return;
        }

        let newUrl = `${url}/api/user`;
        newUrl += curState === "Login" ? "/login" : "/register";

        try {
            const response = await axios.post(newUrl, data);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setSLogin(false);
                toast.success(response.data.message || "Success!");
            } else {
                // Handle specific error messages
                if (response.data.message === "User already exists") {
                    toast.error("User with this email already exists. Please use a different email.");
                } else if (response.data.message === "Incorrect password") {
                    toast.error("Incorrect password. Please try again.");
                } else if (response.data.message === "User not found") {
                    toast.error("User not found. Please check your email and try again.");
                } else {
                    toast.error(response.data.message || "Failed!");
                }
            }
        } catch (error) {
            // Handle server error
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Server error. Please try again later.");
            }
        }
    };

    return (
        <div className="login">
            <ToastContainer />
            <form onSubmit={onLogin} className="log-pop-container">
                <div className="log-pop-title">
                    <h2>{curState}</h2>
                    <img onClick={() => setSLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="log-pop-input">
                    {curState === "Login" ? null : (
                        <input
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder='Your Name'
                            required
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder='Your Email'
                        required
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder='Password'
                        required
                    />
                </div>
                <button type='submit'>
                    {curState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="log-pop-cond">
                    <input type="checkbox" required name="para" />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
                {curState === "Login" ? (
                    <p>Create a New account? <span onClick={() => setCurState("Sign Up")}>Click Here</span></p>
                ) : (
                    <p>Already have an account <span onClick={() => setCurState("Login")}>Login Here</span></p>
                )}
            </form>
        </div>
    );
};

export default Login;
