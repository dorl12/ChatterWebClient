import React from "react";
import allUsers from "../allUsers";
import messages from "../Components/messages";


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


    static sendMessage(user, contact, text, setRefreshed, setInput) {
        if (text.length<1) {
            return;
        }
        var now = new Date();
        var hours = now.getHours()
        if (hours < 10) {
            hours = '0' + hours
        }
        var minutes = now.getMinutes()
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        let obj = {sender: true, text: text, time: hours + ':' + minutes}
        var position = Helpers.findNumOfUser(user)
        for (let i=0; i < messages[position].chats.length; i++) {
            let name = messages[position].chats[i].name;
            if (name==contact) {
                messages[position].chats[i].history.push(obj);
                var updateChatLocation = messages[position].chats[i]
                messages[position].chats.splice(i, 1)
                messages[position].chats.unshift(updateChatLocation)
                setRefreshed((prev) => {return !prev})
                setInput("");
                break;
            }
        }
    }
}
