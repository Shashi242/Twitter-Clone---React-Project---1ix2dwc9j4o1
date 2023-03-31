import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOpt from "./SidebarOpt";
import Twitter from "../node_modules/@mui/icons-material/Twitter";
import Home from "../node_modules/@mui/icons-material/Home";
import Search from "../node_modules/@mui/icons-material/Search";
import NN from "../node_modules/@mui/icons-material/NotificationsNone";
import MailOutline from "../node_modules/@mui/icons-material/MailOutline";
import Bookmark from "../node_modules/@mui/icons-material/BookmarkBorder";
import ListAlt from "../node_modules/@mui/icons-material/ListAlt";
import PermIdentity from "../node_modules/@mui/icons-material/PermIdentity";
import MoreHoriz from "../node_modules/@mui/icons-material/MoreHoriz";
import Button from "../node_modules/@mui/material/Button/Button";
import {useNavigate} from "react-router-dom";
// import App from "./App";

function Sidebar({islogout, setlogout}) {
    // const [logout,setLogout] = useState(true);
    const navigate = useNavigate();

    // function CallApp(){
    //     setLogout(!logout);
    // }
    return (
        <div className="sidebar">
            <Twitter className="sidebar-twitter-icon" />
            <SidebarOpt active Icon={Home} text="Home" />
            <SidebarOpt Icon={Search} text="Explore" />
            <SidebarOpt Icon={NN} text="Notification" />
            <SidebarOpt Icon={MailOutline} text="Messages" />
            <SidebarOpt Icon={Bookmark} text="Bookmarks" />
            <SidebarOpt Icon={ListAlt} text="Lists" />
            <SidebarOpt Icon={PermIdentity} text="Profile" />
            <SidebarOpt Icon={MoreHoriz} text="More" />
            <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
            <Button onClick={()=>{navigate("/")}} variant="outlined" className="sidebar-login" >Logout</Button>
        </div>
    );
}

export default Sidebar;