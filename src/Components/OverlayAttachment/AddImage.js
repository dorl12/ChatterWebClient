import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import Helpers from '../../Logic/helpers';

function AddImage(props){

    const [show, setShow] = useState(false);
    const [image, setImage] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleChange(event){
        const files = event.target.files
        setImage(URL.createObjectURL(files[0]))
        handleClose()
        //Helpers.sendMessage(props.user, "<img src=" + image + "></img>", props.setRefreshed, props.setInput)
    }

    return (
        <>
            <Button onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                    <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
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

export default AddImage;