import React, {useState, useRef} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import Helpers from '../../Logic/helpers';

function AddRecording(props){

    const [show, setShow] = useState(false);
    const [record, setRecord] = useState({});

    const handleClose = () => {setShow(false); props.setAppearance(false);};
    const handleShow = () => {getAccess(); setShow(true)};
    
    function handleChange(event){
        // const files = event.target.files
        // setRecord(URL.createObjectURL(files[0]))
        handleClose()
        if (recording.url != "") {
            Helpers.sendMessage(props.user, props.contact, "rec:" + recording.url, props.setRefreshed, props.setInput)
        }
    }

    const [stream, setStream] = useState({
        access: false,
        recorder: null,
        error: ""
      });
    
    const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: ""
    });

    const chunks = useRef([]);

    function getAccess() {
    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((mic) => {
        let mediaRecorder;

        try {
            mediaRecorder = new MediaRecorder(mic, {
            mimeType: "audio/webm"
            });
        } catch (err) {
            console.log(err);
        }

        const track = mediaRecorder.stream.getTracks()[0];
        track.onended = () => console.log("ended");

        mediaRecorder.onstart = function () {
            setRecording({
            active: true,
            available: false,
            url: ""
            });
        };

        mediaRecorder.ondataavailable = function (e) {
            console.log("data available");
            chunks.current.push(e.data);
        };

        mediaRecorder.onstop = async function () {
            console.log("stopped");

            const url = URL.createObjectURL(chunks.current[0]);
            chunks.current = [];

            setRecording({
            active: false,
            available: true,
            url
            });
        };

        setStream({
            ...stream,
            access: true,
            recorder: mediaRecorder
        });
        })
        .catch((error) => {
        console.log(error);
        setStream({ ...stream, error });
        });
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
                    <Modal.Title>Please record your message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <div className="audio-container">
                            <button
                                className={recording.active ? "active rounded" : "rounded"}
                                onClick={() => !recording.active && stream.recorder.start()}
                            >
                                Start Recording
                            </button>
                            <button className="rounded" onClick={() => stream.recorder.stop()}>Stop Recording</button>
                            {recording.available && <audio controls src={recording.url} />}
                        </div>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleChange}>
                        Send
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
//<Form.Control type="file" onChange={handleChange}/>


export default AddRecording;