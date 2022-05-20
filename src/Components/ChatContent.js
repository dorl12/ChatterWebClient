import MessageItem from './MessageItem';
import InputBar from './InputBar';
import Helpers from '../Logic/helpers';
import { Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Token from '../Token';

function ChatContent(props){

    //const cont = Helpers.findChats(props.username, props.contact);
    const [messagsList, setMessags] = useState([]);
    const [counter, setCounter] = useState(1);
    console.log(props.contact)
    useEffect(() => {
        console.log("fatching")
        
        fetch('https://localhost:7267' + '/API/Contacts/' + props.contact + '/Messages', {
            method:"GET",
            headers: {"Authorization":"Bearer " + Token.get()}
        }).then(res => res.json()).then(res => setMessags(res))
    }, [props.contact, counter]
    )

    const chatContent = messagsList.map((message, key) => {
        return (<MessageItem sender={message.sent} text={message.content} time={message.created.toString()} key={key}></MessageItem>)
    });

    return (
        <>
            <Container fluid>
                <Row>
                    <h1 className='bbb border contactColor'>{props.contact}</h1>
                </Row>
                <Row className="overflow-auto scroller">
                    <div className='padded'>
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