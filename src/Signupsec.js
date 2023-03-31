import React, { useRef } from "react";
import "./Signupsec.css";
import Twitter from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Signupsec() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const urlRef = useRef(null);
    const passRef = useRef(null);

    const navigate = useNavigate();

    function formsubmit() {

        localStorage.setItem(emailRef.current.value,urlRef.current.value);
        createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value).then(async (res) => {
            const userdata = res.user;
            await updateProfile(userdata, {
                displayName: nameRef.current.value
            });
            console.log(res);
            alert("Account created...");
            
            nameRef.current.value = "";
            emailRef.current.value = "";
            urlRef.current.value = "";
            passRef.current.value = "";
            navigate("/");
            
        }).catch((err) => {
            alert(err.code);
        });
    }

    return (
        <>
            <div className="bg-main">
                <div className="main-sec">
                    <div className="left-sec">
                        <div className="signupsec-main">
                            <Twitter className="twitter-icon" />
                            <h3>Join twitter today</h3>
                            <input required ref={nameRef} type="text" placeholder="Name" />
                            <input ref={emailRef} type="text" placeholder="Email or username" required/>
                            <input ref={urlRef} type="url" placeholder="Image url" />
                            <input ref={passRef} type="password" placeholder="Password" required/>
                            <button type="submit" onClick={formsubmit}>Sign up</button>
                            <div className="isreg">
                                <span>Already registered</span>
                                <span className="isreglogin" onClick={() => { navigate("/") }}>Login</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-sec">
                    <h3>Join Twitter today and see what's happening int the world right now...</h3>
                        <img src="https://as2.ftcdn.net/v2/jpg/03/64/62/69/1000_F_364626958_r2NYeuaeJGYbK5RKcFrfZfjVhCDZidNP.jpg" alt="image"/>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Signupsec;