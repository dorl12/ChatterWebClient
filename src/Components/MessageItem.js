import React, { useState } from 'react';
import messages from './messages';
import man1 from '../man1.jpg'
import { Col, Container, Row } from 'react-bootstrap';

function MessageItem({sender, text, time}){

    let arr = "myMessage w-75 bg-light bg-gradient border"

    function chooseObject(){
        if (text.slice(0,4)=="img:"){
            return (<img className="messageImage" src={text.slice(4)}></img>);
        } else if(text.slice(0,4)=="vid:"){
            return (<video className="messageVideo" src={text.slice(4)} controls></video>);
        }
        arr = "myMessage w-25 bg-light bg-gradient border"
        return text;
    }

    function chooseMsgSize() {
        if(text.slice(0,4)!="img:" && text.slice(0,4)!="vid:") {
            if(text.length < 25) {
                return " w-25 ";
            } else if(text.length < 70) {
                return " w-50 ";
            }
        }
        return " w-75 ";
    }
    const isMe = sender;
    if (isMe) {
        return (
            <>
                <div className={"myMessage" + chooseMsgSize() + "bg-light bg-gradient bbb"}>
                    {chooseObject()}
                    <br></br>
                    {time}
                </div>
                <br></br>
            </>
        )
    }
    return (
        <>
            <div className={"otherMessage" + chooseMsgSize() + "ms-auto bg-info bg-gradient bbb"}>
                {chooseObject()}
                <br></br>
                {time}
            </div>
            <br></br>
        </>
    )
};

export default MessageItem;