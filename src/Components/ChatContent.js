import React, {useState} from 'react';
import MessageItem from './MessageItem';
import InputBar from './InputBar';
import Helpers from '../Logic/helpers';
import { Container, Row } from 'react-bootstrap';

function ChatContent(props){

    const cont = Helpers.findChats(props.username, props.contact);

    const chatContent = cont.map((message, key) => {
        return <MessageItem {...message} key={key}></MessageItem>
    });

    return (
        <>
            <Container fluid>
                <Row>
                    <h1>{props.contact}</h1>
                </Row>
                <Row className="overflow-auto scroller">
                    <div>
                        {chatContent}
                    </div>
                </Row>
                <Row className="bottom">
                    <InputBar setRefreshed={props.setRefreshed} username={props.username} contact={props.contact}></InputBar>
                </Row>
            </Container>
        </>

    );
}

export default ChatContent;