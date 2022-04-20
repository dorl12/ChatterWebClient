import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import Helpers from '../../Logic/helpers';

function AddRecording(props){

    const [show, setShow] = useState(false);
    const [record, setRecord] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleChange(event){
        const files = event.target.files
        setRecord(URL.createObjectURL(files[0]))
        handleClose()
        //Helpers.sendMessage(props.user, "<rec src=" + image + "></rec>", props.setRefreshed, props.setInput)
    }

    return (
        <>
            <Button onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please choose a file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" onChange={handleChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddRecording;