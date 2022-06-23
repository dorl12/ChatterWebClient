import React, {useState} from "react";
import { FormControl } from "react-bootstrap";
import Token from '../Token';
import Server from "../Server";
import Helpers from "../Logic/helpers";

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

    const [addNewContactData, setAddNewContactData] = React.useState({
        username: "",
        nickname: "",
        server: ""
    })

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

        if (addNewContactData.username == props.username) {
            setErrorMessage("You can not add yourself")
            return;
        }

        const addContactData = {
            id: addNewContactData.username,
            name: addNewContactData.nickname,
            server: addNewContactData.server
        }
        var firstFetchSuccessed = true;
        fetch('https://localhost:' + Server.get() + '/API/contacts', {
            method:"post",
            headers: {"content-type": "application/json",
                        "Authorization":"Bearer " + Token.get()},
            body: JSON.stringify(addContactData),
        }).then(res => {
            if(res.ok) {
                props.setChange((prev) => {return !prev})
                setErrorMessage("Contact Added")
                setAddNewContactData({
                    username: "",
                    nickname: "",
                    server: ""
                })
            } else {
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
                var fixedContactServer = Helpers.fixServer(addNewContactData.server);
                fetch('https://' + fixedContactServer + '/API/invitations', {
                    method:"post",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify(invitationData),
                }).then(res => {
                    if(res.status) {
                        props.setChange((prev) => {return !prev})
                    }
                }
                )
            } else {
                console.log("2-bad request")
            }
            }
        )
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