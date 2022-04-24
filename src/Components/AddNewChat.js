import React, {useState} from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import allUsers from "../allUsers";
import Helpers from "../Logic/helpers";
import messages from "./messages";

function AddNewChat(props){

    const [input, setInput] = useState("");

    function handleChange(event){
        let value = event.target.value
        setInput(value);
    }

    function addContact() {
        var position = Helpers.findNumOfUser(props.username)
        var image = ""
        var i;
        var isExist=0
        for(i=0; i < allUsers.length; i++){
            if(allUsers[i].username == input) {
                if(allUsers[i].username!=props.username){
                    image = allUsers[i].image
                    isExist=1
                    break
                } else {
                    isExist=2
                }
            }
        }
        if(isExist==1) {
            var nick = Helpers.getNickname(input)
            for(var j=0; j < messages[position].chats.length; j++) {
                if(nick == messages[position].chats[j].name) {
                    isExist = 3;
                }
            }
        }
        if(isExist==1) {
            let obj = {name: allUsers[i].nickname, image: image, history: []}
            messages[position].chats.unshift(obj);
            props.setChange((prev) => {return !prev});
            setInput("")
            setErrorMessage('User added!')
        } else if(isExist==0) {
            setInput("")
            setErrorMessage('User does not exist!');
        } else if(isExist==2) {
            setInput("")
            setErrorMessage('You can not add chat with yourself!');
        } else {
            setInput("") //isExist=3
            setErrorMessage('User alreadt exist in chats!');
        }
        
    }

    function clearMassage() {
        setErrorMessage('');
    }

    const [errorMessage, setErrorMessage] = useState('');


    return (
        <div className="modal fade" id="addChat" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <FormControl placeholder="Contact Identifier" type="text" onChange={handleChange} value={input}></FormControl>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearMassage}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={addContact}>Apply</button>
                </div>
                {errorMessage && (<p className="error"> {errorMessage} </p>)}
                </div>
            </div>
        </div>
    )
}

export default AddNewChat;