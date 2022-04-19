import React, { useState } from 'react';

function MessageItem({sender, text, time}){

    const isMe = sender;
    if (isMe) {
        return (
            <>
                <div className="myMessage w-75 bg-light bg-gradient border">
                    {text}
                    <br></br>
                    {time}
                </div>
                <br></br>
            </>
        )
    }
    return (
        <>
            <div className="otherMessage w-75 ms-auto bg-info bg-gradient border">
                {text}
                <br></br>
                {time}
            </div>
            <br></br>
        </>
    )
};

export default MessageItem;