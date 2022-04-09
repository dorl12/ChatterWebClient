import React from "react";
import LogInPage from "./LogInPage/LogInPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import allUsers from './allUsers';

function Pages(props) {

    return (
        <div>
            {props.isLogin ? (<LogInPage handleClick={props.handleClick}/>) :
            (<RegisterPage handleClick={props.handleClick}/>)}
        </div>
    )
}


export default Pages;