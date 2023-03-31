import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Repeat from "@mui/icons-material/Repeat";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Publish from "@mui/icons-material/Publish";

function Post({ displayName, userName, verified, text, avatar, image, likes }) {

    const [likebtn, setLike] = useState(true);
    const [count, setCount] = useState(likes);
    const [value, setValue] = useState('');
    const [output, setOutput] = useState([]);
    const [comment, setComment] = useState(false);

    // const inputRef = useRef(null);

    function ChangeLike() {
        likebtn ? setCount(count + 1) : setCount(count - 1);
        setLike(!likebtn);
        likes++;
    }

    function handleSubmit() {
        setOutput([...output, value]);
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
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
                    <div className="comment-icon" onClick={() => { setComment(!comment) }}>
                        <ChatBubbleOutline fontSize="small" className="post-icon" />
                    </div>
                    <Repeat fontSize="small" className="post-icon" />
                    <div id="likes" onClick={(e) => { e.target.parentElement.className = likebtn ? "like-btn" : ""; ChangeLike(); }}>
                        <FavoriteBorder fontSize="small" className="post-icon" />
                        <span className="likes-num"> {count}</span>
                    </div>
                    <Publish fontSize="small" className="post-icon" />
                </div>
                {
                    comment ? <div className="comment-inp">
                        <input type="text" value={value} onChange={handleChange} />
                        <button type="button" onClick={handleSubmit}>Comment</button>
                    </div> : ""
                }

                {output.map((data) =>
                    (<div className="comment-sec"><Avatar src={avatar} className="comment-dp" /><span className="comment-text">{data}</span></div>)
                )}
            </div>
        </div>
    );
}

export default Post