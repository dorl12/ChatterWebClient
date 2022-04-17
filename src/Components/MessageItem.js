import React, { useState } from 'react';

function MessageItem({sender, text, time}){

    const isMe = sender;
    if (isMe) {
        return (
            <>
                <div className="myMessage w-50 bg-danger border">
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
            <div className="otherMessage w-50 ms-auto bg-secondary border">
                {text}
                <br></br>
                {time}
            </div>
            <br></br>
        </>
    )
};

export default MessageItem;