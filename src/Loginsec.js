import React, { useEffect, useRef, useState } from "react";
import "./Loginsec.css";
import Twitter from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Loginsec() {
    // const [signupform,setSignupform] = useState([]);
    // const [state,setState] = useState(false);

    const username = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    function logedin(){
        signInWithEmailAndPassword(auth,username.current.value,password.current.value).then((res)=>{
            // setLogout(false);
                navigate("/signedin");
        }).catch((err)=>{
            alert(err.code);
        });
    }
    // useEffect(()=>{
    //     db.collection('signupform').onSnapshot(snapshot => (
    //         setSignupform(snapshot.docs.map(doc => doc.data()))
    //     ));
    // },[]);

    // function Dologin(){
    //     signupform.map(data =>{
    //         if(data.name==username.current.value){
    //             alert("yes he is available");
    //             setState(true);
    //         }
    //     });
    //     if(!state){
    //         alert("Incorrect");
    //     }
    // }
    return (
        <>
            <div className="bg-main">
                <div className="main-sec">
                    <div className="left-sec">
                        <div className="login-main">
                            <Twitter className="twitter-icon" />
                            <h3>Welcome Back</h3>
                            <input required type="text" ref={username} placeholder="Phone, email or username" />
                            <input required type="password" ref={password} placeholder="Password" />
                            <button type="submit" onClick={logedin}>Log in</button>
                            <div className="signup-div"><span>Don't have an account yet?</span>
                            <span className="signup" onClick={()=>{navigate("/signup")}}>Sign up</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-sec">
                        <h3>Join Twitter today and see what's happening int the world right now...</h3>
                        <img src="https://as2.ftcdn.net/v2/jpg/03/64/62/69/1000_F_364626958_r2NYeuaeJGYbK5RKcFrfZfjVhCDZidNP.jpg" alt="image"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginsec;