import allUsers from "../allUsers";
import messages from "../Components/messages";
import Token from '../Token';
import Server from "../Server";

export default class Helpers{

    constructor(){};
    
    static findChats(user, chat) {
        if (chat=="Empty") {
            return [];
        }
        var position = Helpers.findNumOfUser(user);
        for (let i=0; i < messages[position].chats.length; i++) {
            if (messages[position].chats[i].name==chat) {
                return messages[position].chats[i].history;
            }
        }
    }

    static findNumOfUser(user) {
        for (let i=0; i < messages.length; i++) {
            if (messages[i].user==user) {
                return i;
            }
        }
        return -1;
    }

    static getNickname(user) {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username == user) {
                return (allUsers[i].nickname);
            }
        }
    }

    static sendMessage(contact, text, setRefreshed, setInput) {
        if (text.length<1) {
            return;
        }
        const messageData = {content: text}
        fetch('https://localhost:' + Server.get() + '/API/contacts/' + contact + '/messages', {
            method:"post",
            headers: {"content-type": "application/json",
                        "Authorization":"Bearer " + Token.get()},
            body: JSON.stringify(messageData),
        })
    }
    static sendTransfer(user, contact, contactServer, text, setRefreshed, setInput) {
        if (text.length<1) {
            return;
        }
        const transferData = {
            from: user,
            to: contact,
            content: text
        }
        
        fetch('https://' + contactServer + '/API/transfer', {
            method:"post",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(transferData),
        }).then(res => {
            if(res.status) {
                setRefreshed((prev) => {return !prev})
                setInput("")
            }
        }
        )
    }

    static parseTime(timeString) {
        let time = timeString.substring(11, 16)
        return time
    }
}
