import React, {useState} from 'react';
import MessageItem from './MessageItem';
import InputBar from './InputBar';
import findChats from '../Logic/helpers';

function ChatContent(props){

    const cont = findChats(props.contact);

    const chatContent = cont.map((message, key) => {
        return <MessageItem {...message} key={key}></MessageItem>
    });

    return (
        <>
            <h1>{props.contact}</h1>
            {chatContent}
            <InputBar className="bottom" setRefreshed={props.setRefreshed} contact={props.contact}></InputBar>
        </>

    );
}

export default ChatContent;