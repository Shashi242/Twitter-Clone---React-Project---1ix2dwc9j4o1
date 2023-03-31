import React from "react";
import "./Widget.css";
import {TwitterTweetEmbed,TwitterShareButton,TwitterTimelineEmbed} from "react-twitter-embed";
import Search from "@mui/icons-material/Search";

function Widget(){
    return(
        <div className="widget">
            <div className="widget-inp">
                <Search className="widget-search-icon"/>
                <input placeholder="Search tweet..." type="text"/>
            </div>
            <div className="widget-container">
                <h2>What's happening...</h2>
                <TwitterTweetEmbed tweetId="1638222427703644161" />
                <TwitterTimelineEmbed sourceType="profile" screenName="ShashiRaj" options={{height:200}}/>
                <TwitterShareButton url="https://twitter.com/home" options={{text: "#reactjs is badhiyaaa", via:"Shashiraj"}}/>
            </div>
        </div>
    );
}

export default Widget;