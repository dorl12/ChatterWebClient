import React from "react";
import messages from "../Components/messages";

function findChats(name) {
    if (name=="Empty") {
        return [];
    }
    for (let i=0; i < messages.length; i++) {
        if (messages[i].name==name) {
            return messages[i].history;
        }
    }
}

class Helpers{

    constructor(){};

    static findChats(name) {
        if (name=="Empty") {
            return [];
        }
        for (let i=0; i < messages.length; i++) {
            if (messages[i].name==name) {
                return messages[i].history;
            }
        }
    }
    
    static sendMessage(user, text, setRefreshed, setInput) {
        var now = new Date();
        let obj = {sender: true, text: text, time: now.getHours() + ':' + now.getMinutes()}
        for (let i=0; i < messages.length; i++) {
            let name = messages[i].name;
            if (name==user) {
                messages[i].history.push(obj);
                setRefreshed((prev) => {return !prev})
                setInput("");
                break;
            }
        }
    }
}

export default findChats;

//add class