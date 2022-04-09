import React from "react";
import './ChatPage.css';
import Sidebar from "./Sidebar";

function ChatPage(props) {

    return (
        <div className="chatPage" >
            <h1>Chats</h1>
            <div className="row align-items-start">
                <div className="col-3 sidebar">
                    One of three columns
                    <Sidebar/>
                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
        </div>
    );
}

export default ChatPage;