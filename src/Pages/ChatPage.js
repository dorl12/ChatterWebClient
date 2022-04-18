import React, {useState} from 'react';
import ChatSideBar from '../Components/ChatSideBar';
import ChatContent from '../Components/ChatContent';
import './ChatPage.css';

function ChatPage(props){

    const [contact, setContact] = useState("Empty");
    const [refreshed, setRefreshed] = useState(false);


    function isEmpty() {
        if (contact=="Empty") {
            return (<div></div>);
        } else {
            return (<ChatContent setRefreshed={setRefreshed} contact={contact}></ChatContent>);
        }
    }

    return(
            <div className="BoundingBox container">
                <div className="container">
                    <div className="row">
                        <div className="col-4 bg-primary rounded border border-white">
                            <ChatSideBar username={props.username} setContact={setContact}></ChatSideBar>
                        </div>
                        <div className="col bg-success rounded border border-white">
                            {isEmpty()}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ChatPage;