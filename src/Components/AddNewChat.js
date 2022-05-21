import React, {useState} from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import allUsers from "../allUsers";
import Helpers from "../Logic/helpers";
import messages from "./messages";
import Token from '../Token';


function AddNewChat(props){

    
    function clearMassage() {
        setErrorMessage("");
        setAddNewContactData({
            username: "",
            nickname: "",
            server: ""
        })
    }

    const [errorMessage, setErrorMessage] = useState('');


    //const [input, setInput] = useState("");
    const [addNewContactData, setAddNewContactData] = React.useState({
        username: "",
        nickname: "",
        server: ""
    })
    // function handleChange(event){
    //     let value = event.target.value
    //     setInput(value);
    // }
    function handleChange(event) {
        const { name, value } = event.target
        setAddNewContactData((addNewContactData) => ({
            ...addNewContactData,
            [name]: value
        }))
    }
    function addContact() {
        if (addNewContactData.username.length < 1 || addNewContactData.nickname.length < 1 || addNewContactData.server.length < 1) {
            setErrorMessage("All fields required!")
            return;
        }

        const addContactData = {
            id: addNewContactData.username,
            name: addNewContactData.nickname,
            server: addNewContactData.server
        }
        var firstFetchSuccessed = true;
        fetch('https://localhost:7267' + '/API/Contacts', {
            method:"post",
            headers: {"content-type": "application/json",
                        "Authorization":"Bearer " + Token.get()},
            body: JSON.stringify(addContactData),
        }).then(res => {
            if(res.ok) {
                console.log("good request")
                props.setChange((prev) => {return !prev})
                setErrorMessage("Contact Added")
                setAddNewContactData({
                    username: "",
                    nickname: "",
                    server: ""
                })
            } else {
                console.log("bad request")
                firstFetchSuccessed = false
                setErrorMessage("Contact already exist")
            }
        }
        ).then(res => {
            if(firstFetchSuccessed) {
                const invitationData = {
                    from: props.username,
                    to: addNewContactData.username,
                    server: addNewContactData.server
                }
                fetch('https://' + addNewContactData.server + '/API/Invitations', {
                    method:"post",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify(invitationData),
                }).then(res => {
                    if(res.status) {
                        console.log("2-good request")
                        props.setChange((prev) => {return !prev})
                    }
                }
                )
            } else {
                console.log("2-bad request")
            }
            }
        )
        

        // var position = Helpers.findNumOfUser(props.username)
        // var image = ""
        // var i;
        // var isExist=0
        // for(i=0; i < allUsers.length; i++){
        //     if(allUsers[i].username == input) {
        //         if(allUsers[i].username!=props.username){
        //             image = allUsers[i].image
        //             isExist=1
        //             break
        //         } else {
        //             isExist=2
        //         }
        //     }
        // }
        // if(isExist==1) {
        //     var nick = Helpers.getNickname(input)
        //     for(var j=0; j < messages[position].chats.length; j++) {
        //         if(nick == messages[position].chats[j].name) {
        //             isExist = 3;
        //         }
        //     }
        // }

        // if(isExist==1) {
        //     let obj = {name: allUsers[i].nickname, image: image, history: []}
        //     messages[position].chats.unshift(obj);
        //     props.setChange((prev) => {return !prev});
        //     setInput("")
        //     setErrorMessage('User added!')
        // } else if(isExist==0) {
        //     setInput("")
        //     setErrorMessage('User does not exist!');
        // } else if(isExist==2) {
        //     setInput("")
        //     setErrorMessage('You can not add chat with yourself!');
        // } else {
        //     setInput("") //isExist=3
        //     setErrorMessage('User alreadt exist in chats!');
        // }
        
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
                    <FormControl placeholder="Contact username" type="text" name="username" onChange={handleChange} value={addNewContactData.username}></FormControl>
                </div>
                <div className="modal-body">
                    <FormControl placeholder="Contact nickname" type="text" name="nickname" onChange={handleChange} value={addNewContactData.nickname}></FormControl>
                </div>
                <div className="modal-body">
                    <FormControl placeholder="Contact server" type="text" name="server" onChange={handleChange} value={addNewContactData.server}></FormControl>
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