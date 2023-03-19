import React from "react";
import "./Commentbox.css";

function Commentbox({commentinp2}){
    return(
        <div className="comment">
            <span>{commentinp2}</span>
        </div>
    );
}

export default Commentbox;