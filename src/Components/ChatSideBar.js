import React, { useState } from 'react';
import ChatItem from './ChatItem';
import AddNewChat from './AddNewChat';
import messages from './messages';
import { ListGroup } from 'react-bootstrap';
import allUsers from '../allUsers';
import Helpers from '../Logic/helpers';
import { useHistory } from "react-router-dom";


function ChatSideBar(props){

    let history = useHistory();

    const [change, setChange] = useState(false);
    var position = Helpers.findNumOfUser(props.username);
    //if username doesn't exist - in case of refreash
    if(position == -1) {
        history.push("/");

    } else {
        const chatList = messages[position].chats.map((chat, key) => {
            if (chat.name==props.contact) {
                return (<ListGroup.Item as="li" active key={key}><ChatItem setContact={props.setContact} {...chat}></ChatItem></ListGroup.Item>)
            }
            return (<ListGroup.Item as="li" key={key}><ChatItem setContact={props.setContact} {...chat}></ChatItem></ListGroup.Item>)
        });

        function findImage() {
            for (let i=0; i < allUsers.length; i++) {
                if (props.username==allUsers[i].username){
                    return (allUsers[i].image);
                }
            }
        }


        function exitIcon() {
            history.push("/");
        }
        
        return(
            <div>
                <AddNewChat username={props.username} setChange={setChange}></AddNewChat>
                <div className="row">
                    <div className="col-1 sideBarIcons">
                        <svg xmlns="http://www.w3.org/2000/svg" type="button" onClick={exitIcon} width="25" height="25" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                        </svg>
                    </div>
                    <div className="col-1">
                        <img src={findImage()} alt={props.username}></img>
                    </div>
                    <div className="col">
                        <h1>{Helpers.getNickname(props.username)}</h1>
                    </div>
                    <div className="col-1 sideBarIcons">
                        <svg xmlns="http://www.w3.org/2000/svg" type="button" data-bs-toggle="modal" data-bs-target="#addChat" width="25" height="25" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                </div>
                <div className="overflow-auto scroller">
                    <ListGroup as="ul">
                        {chatList}
                    </ListGroup>
                </div>
            </div>
    
        )
    }
    
}

export default ChatSideBar;