import React, {useEffect,useState} from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "./firebase";
function Feed({show1,commentinp,is_inp, setInputfun}) {

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
            
            <Tweetbox/>
            {posts.map(post => (
                <Post show2={show1} displayName={post.displayName}
                userName={post.userName}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                likes={post.likes}
                commentinp2={commentinp}
                is_inp2={is_inp}
                setInputfun={setInputfun}/>
            ))}
        </div>
    )
}

export default Feed