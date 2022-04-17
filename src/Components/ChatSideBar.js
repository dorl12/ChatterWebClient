import React, { useState } from 'react';
import ChatItem from './ChatItem';
import chatWith from './chatWith';
import AddNewChat from './AddNewChat';
import messages from './messages';

function ChatSideBar(props){

    const [change, setChange] = useState(false);
    const chatList = messages.map((chat, key) => {
        return (<ChatItem setContact={props.setContact} {...chat}  key={key}></ChatItem>)
    });

    return(
        <div>
            <AddNewChat setChange={setChange}></AddNewChat>
            <h1>User's name</h1>
            <svg xmlns="http://www.w3.org/2000/svg" type="button" data-bs-toggle="modal" data-bs-target="#addChat" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            <div className="overflow-auto">
                {chatList}
            </div>
        </div>

    )
}

export default ChatSideBar;