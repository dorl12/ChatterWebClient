import React from "react";
import allUsers from "../allUsers";
import messages from "../Components/messages";


// function findChats(user, chat) {
//     if (chat=="Empty") {
//         return [];
//     }
//     var position = findNumOfUser(user);
//     for (let i=0; i < messages[position].chats.length; i++) {
//         if (messages[position].chats[i].name==chat) {
//             return messages[position].chats[i].history;
//         }
//     }
// }
// function findNumOfUser(user) {
//     for (let i=0; i < messages.length; i++) {
//         if (messages[i].user==user) {
//             return i;
//         }
//     }
// }

export default class Helpers{

    constructor(){};

    // static findChats(name) {
    //     if (name=="Empty") {
    //         return [];
    //     }
    //     for (let i=0; i < messages.length; i++) {
    //         if (messages[i].name==name) {
    //             return messages[i].history;
    //         }
    //     }
    // }
    
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

    // static sendMessage(user, text, setRefreshed, setInput) {
    //     var now = new Date();
    //     let obj = {sender: true, text: text, time: now.getHours() + ':' + now.getMinutes()}
    //     for (let i=0; i < messages.length; i++) {
    //         let name = messages[i].name;
    //         if (name==user) {
    //             messages[i].history.push(obj);
    //             setRefreshed((prev) => {return !prev})
    //             setInput("");
    //             break;
    //         }
    //     }
    // }

    static sendMessage(user, contact, text, setRefreshed, setInput) {
        if (text.length<1) {
            return;
        }
        var now = new Date();
        let obj = {sender: true, text: text, time: now.getHours() + ':' + now.getMinutes()}
        var position = Helpers.findNumOfUser(user)
        for (let i=0; i < messages[position].chats.length; i++) {
            let name = messages[position].chats[i].name;
            if (name==contact) {
                messages[position].chats[i].history.push(obj);
                setRefreshed((prev) => {return !prev})
                setInput("");
                break;
            }
        }
    }
}
