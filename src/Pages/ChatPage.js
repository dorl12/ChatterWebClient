import React, {useState} from 'react';
import ChatSideBar from '../Components/ChatSideBar';
import ChatContent from '../Components/ChatContent';
import './ChatPage.css';
import useWindowDimensions from '../Logic/window';

function ChatPage(props){

    const [contact, setContact] = useState("Empty");
    const [refreshed, setRefreshed] = useState(false);
    const { height, width } = useWindowDimensions();

    function isEmpty() {
        if (contact=="Empty") {
            return (<div></div>);
        } else {
            return (<ChatContent setRefreshed={setRefreshed} username={props.username} contact={contact}></ChatContent>);
        }
    }

    return(
            <div className="container bbb">
                <div className="container">
                    <div className="row">
                        <div className="vh-100 col-4 bg-light rounded overflow-auto">
                            <ChatSideBar username={props.username} setContact={setContact} contact={contact}></ChatSideBar>
                        </div>
                        <div className="vh-100 col content-bg rounded">
                            {isEmpty()}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ChatPage;