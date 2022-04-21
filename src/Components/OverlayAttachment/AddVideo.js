import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import Helpers from '../../Logic/helpers';

function AddVideo(props){

    const [show, setShow] = useState(false);
    const [video, setVideo] = useState({});

    const handleClose = () => {setShow(false); props.setAppearance(false);};
    const handleShow = () => setShow(true);
    
    function handleChange(event){
        const files = event.target.files
        setVideo(URL.createObjectURL(files[0]))
        handleClose()
        Helpers.sendMessage(props.user, props.contact, "vid:" + URL.createObjectURL(files[0]), props.setRefreshed, props.setInput)
    }

    return (
        <>
            <Button onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels-fill" viewBox="0 0 16 16">
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
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

export default AddVideo;