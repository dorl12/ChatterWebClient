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
            return (<ChatContent setRefreshed={setRefreshed} contact={contact}></ChatContent>);
        }
    }

    return(
            <div className="BoundingBox container">
                <div className="container vh-100">
                    <div className="row">
                        <div className="col-4 bg-light rounded border border-white overflow-auto">
                            <ChatSideBar username={props.username} setContact={setContact} contact={contact}></ChatSideBar>
                        </div>
                        <div className="col bg-secondary rounded border border-white overflow-auto">
                            {isEmpty()}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ChatPage;