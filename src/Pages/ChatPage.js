import React, {useState, useEffect} from 'react';
import ChatSideBar from '../Components/ChatSideBar';
import ChatContent from '../Components/ChatContent';
import './ChatPage.css';
import useWindowDimensions from '../Logic/window';
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';
import Token from '../Token.js';

function ChatPage(props){

    const [contact, setContact] = useState("Empty");
    const [contactServer, setContactServer] = useState("");
    const [refreshed, setRefreshed] = useState(false);
    const { height, width } = useWindowDimensions();

    const [ connection, setConnection ] = useState(null);
    function isEmpty() {
        if (contact=="Empty") {
            return (<div></div>);
        } else {
            return (<ChatContent refreshed={refreshed} setRefreshed={setRefreshed} username={props.username} contact={contact} contactServer={contactServer}></ChatContent>);
        }
    }
    ;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7267/ChatHub', {
                accessTokenFactory: () => Token.get(),
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
    
                    connection.on('ReceiveMessage', message => {
                        setRefreshed((prev) => {return !prev})
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    return(
            <div className="container bbb">
                <div className="container">
                    <div className="row">
                        <div className="vh-100 col-4 bg-light rounded overflow-auto">
                            <ChatSideBar username={props.username} refreshed={refreshed} setContact={setContact} setContactServer={setContactServer} contact={contact}></ChatSideBar>
                        </div>
                        <div className="vh-100 col content-bg rounded">
                            {isEmpty()}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ChatPage;