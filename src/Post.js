import React, { useState, useRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Repeat from "@mui/icons-material/Repeat";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Publish from "@mui/icons-material/Publish";

function Post({ displayName, userName, verified, text, avatar, image, show2, likes, commentinp2, is_inp2, setInputfun }) {

    const [likebtn, setLike] = useState(true);
    const [count, setCount] = useState(likes);
    const [cmnted, setComment] = useState("");
    const [is_cmnt, set_is_Comnt] = useState(false);
    
    const inputRef = useRef(null);

    function ChangeLike() {
        likebtn ? setCount(count + 1) : setCount(count - 1);
        setLike(!likebtn);
        likes++;
    }
    // let cmnt;
    function DoComment(){
        setComment(inputRef.current.value);
    }

    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src={avatar}></Avatar>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-name">
                        <h3>
                            {displayName}{" "}
                            <span className="post-header-username">
                                <VerifiedUser className="post-badge" /> {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-decription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="post" />
                <div className="post-footer">
                    <div className="comment-icon" onClick={() => { show2((p) => !p); }}>
                        <ChatBubbleOutline fontSize="small" className="post-icon" />
                    </div>
                    <Repeat fontSize="small" className="post-icon" />
                    <div id="likes" onClick={(e) => { e.target.parentElement.className = likebtn ? "like-btn" : ""; ChangeLike(); }}>
                        <FavoriteBorder fontSize="small" className="post-icon" />
                        <span className="likes-num"> {count}</span>
                    </div>
                    <Publish fontSize="small" className="post-icon" />
                </div>
                <input type="text" ref={inputRef}/>
                <button type="button" onClick={DoComment}>Comment</button>
                {cmnted}
                {/* <div className={is_inp2?"":"invisible"}>  */}
                {/* {cmntval?commentinp2:""} */}
                {/* {is_inp2?set_is_Comnt(false):set_is_Comnt(true)} */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Post