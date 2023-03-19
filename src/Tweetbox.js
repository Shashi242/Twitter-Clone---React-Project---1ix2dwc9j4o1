import React, {useState} from "react";
import "./Tweetbox.css";
import { Button,Avatar } from "@mui/material";
import db from "./firebase";

function Tweetbox(){

    const [tweet_text,newtweet] = useState("");
    const [tweet_image,newurltweet] = useState("");

    const post_tweet = e => {
        e.preventDefault();
        let random = parseInt(Math.random()*1000);
        db.collection('posts').add({
            displayName: "Shashi raj",
            userName: "raj34828",
            verified: true,
            text: tweet_text,
            image: tweet_image,
            avatar: "https://avatars.githubusercontent.com/u/84275426?v=4",
            likes: random
        })
        newtweet("");
        newurltweet("");
    }

    return(
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar src="https://avatars.githubusercontent.com/u/84275426?v=4"></Avatar>
                    <input value={tweet_text} onChange={(e) => newtweet(e.target.value)} placeholder="What's happening there..." type="text"/>
                </div>
                <input value={tweet_image} onChange={(e) => newurltweet(e.target.value)} className="tweetbox-img-inp" placeholder="Optional: Enter image URL...." type="text"/>
                <Button type="submit" onClick={post_tweet} className="tweetbox-btn">Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox