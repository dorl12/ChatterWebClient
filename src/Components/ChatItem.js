import React, { useState } from 'react';

function ChatItem(props){

    function shortenText(){
        let lastMessage = props.history[props.history.length - 1].text
        let messageLen = lastMessage.length
        if (messageLen > 30) {
            lastMessage = lastMessage.slice(0, 30) + "..."
        }
        return lastMessage
    }

    return (
        <div className="container" onClick={() => props.setContact(props.name)}>
            <div className="row">
                <div className="col-2">
                    <img src={props.image} alt={props.name}></img>
                </div>
                <div className="col border border-white rounded bg-secondary">
                    <div className="bold">
                        {props.name}
                    </div>
                    {props.history.length == 0 ? "" : shortenText() + ", time: " + props.history[props.history.length - 1].time}
                </div>
            </div>
        </div>
    );
}

export default ChatItem;