import React from "react";
import "./SidebarOpt.css";

function SidebarOpt({active, text,Icon}){
    return(
        <div className={`sidebaropt ${active && "sidebaropt-active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOpt;