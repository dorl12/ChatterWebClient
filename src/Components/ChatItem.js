import React from 'react';
import GenericProfile from "../Generic-Profile.jpg";

function ChatItem(props){
    function shortenText(){
        let lastMessage = props.history
        if (lastMessage.slice(0,4)=="img:"){
            return ("~Image~");
        } else if(lastMessage.slice(0,4)=="vid:") {
            return ("~Video~");
        } else if(lastMessage.slice(0,4)=="rec:") {
            return ("~Audio~");
        }
        let messageLen = lastMessage.length
        if (messageLen > 30) {
            lastMessage = lastMessage.substring(0, 30) + "..."
        }
        return lastMessage
    }

    return (
        <div className="container" onClick={() => props.setContact(props.contact)}>
            <div className="row">
                <div className="col-1">
                    <img src={GenericProfile} alt={props.name}></img>
                </div>
                <div className="col">
                    <div className="bold">
                        {props.name}
                    </div>
                    <div>
                        {props.history.length == 0 ? "" : shortenText()}
                    </div>
                    <div>
                        {props.history.length == 0 ? "" : props.time.substring(0, 19)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatItem;