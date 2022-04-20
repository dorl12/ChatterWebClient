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
        for(var i=0; i < allUsers.length; i++){
            if(allUsers[i].nickname == input) {
                image = allUsers[i].image
            }
        }
        let obj = {name: input, image: image, history: []}
        messages[position].chats.push(obj);
        props.setChange((prev) => {return !prev});
        setInput("")
    }

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
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addContact}>Apply</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewChat;