import React, { useState } from "react";
import {Button, ButtonGroup, ButtonToolbar, Popover, OverlayTrigger} from 'react-bootstrap';
import AddImage from "./AddImage";
import AddRecording from "./AddRecording";
import AddVideo from "./AddVideo";

//user={props.user} setRefreshed={props.setRefreshed} setInput={props.setInput}

function AttachFiles(props){

    const [appearance, setAppearance] = useState(false)

    return (
        <OverlayTrigger
            show={appearance}
            trigger="click"
            overlay={
                <Popover id={`popover-positioned-top`}>
                    <Popover.Body>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <AddImage setAppearance={setAppearance} user={props.user} contact={props.contact} setRefreshed={props.setRefreshed} setInput={props.setInput}></AddImage>
                                <AddVideo setAppearance={setAppearance} user={props.user} contact={props.contact} setRefreshed={props.setRefreshed} setInput={props.setInput}></AddVideo>
                                <AddRecording setAppearance={setAppearance} user={props.user} contact={props.contact} setRefreshed={props.setRefreshed} setInput={props.setInput}></AddRecording>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                        <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                                    </svg>
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Popover.Body>
                </Popover>
            }>
            <Button onClick={() => {if (appearance){setAppearance(false)} else {setAppearance(true)}}} variant="primary" id="button-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
            </Button>
        </OverlayTrigger>
    )
}

export default AttachFiles;