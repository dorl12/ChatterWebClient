import MessageItem from './MessageItem';
import InputBar from './InputBar';
import { Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Token from '../Token';
import Helpers from '../Logic/helpers';

function ChatContent(props){

    const [nameOfContact, setNameOfContact] = useState("");
    const [messagsList, setMessags] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7267' + '/API/contacts/' + props.contact + '/messages', {
            method:"GET",
            headers: {"Authorization":"Bearer " + Token.get()}
        }).then(res => res.json()).then(res => setMessags(res))
    }, [props.contact, props.refreshed]
    )

    useEffect(() => {
        fetch('https://localhost:7267' + '/API/Users/' + props.contact, {
            method:"GET",
            headers: {"Authorization":"Bearer " + Token.get()}
        }).then(res => res.json()).then(res => setNameOfContact(res))
    }, [props.contact, props.refreshed]
    )

    const chatContent = messagsList.map((message, key) => {
        return (<MessageItem sender={message.sent} text={message.content} time={Helpers.parseTime(message.created)} key={key}></MessageItem>)
    });

    return (
        <>
            <Container fluid>
                <Row>
                    <h1 className='bbb border contactColor'>{nameOfContact.name}</h1>
                </Row>
                <Row className="overflow-auto scroller">
                    <div className='padded'>
                        {chatContent}
                    </div>
                </Row>
                <Row className="bottom">
                    <InputBar setRefreshed={props.setRefreshed} username={props.username} contact={props.contact} contactServer={props.contactServer}></InputBar>
                </Row>
            </Container>
        </>

    );
}

export default ChatContent;