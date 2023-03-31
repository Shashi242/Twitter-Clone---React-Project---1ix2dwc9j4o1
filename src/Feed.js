import React, {useEffect,useState} from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "./firebase";


function Feed({name,email,image}) {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ));
    },[]);

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            
            <Tweetbox image={image} />
            {posts.map(post => (
                <Post displayName={name}
                userName={email}
                verified={post.verified}
                text={post.text}
                avatar={image}
                image={post.image}
                likes={post.likes}
                />
            ))}
        </div>
    )
}

export default Feed