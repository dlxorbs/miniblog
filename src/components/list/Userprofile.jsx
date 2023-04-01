import React from "react";

export default function Userprofile(){

    return(
        <div className="userprofilecontianer">
            <div className="userprofile">
                <img src={props.userprofile} alt="" />
            </div>

            <h2 className="blogname"> {props.userid} 's Blog</h2>
            <p className="intro"> {props.userinfo} </p>
        </div>
    )
}