import React from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Token from '../Token.js';
import Server from '../Server';

function RegisterPage(props) {
    const [RegisterData, setRegisterData] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        nickname: "",
        image: ""
    })

    let history = useHistory();

    function handleChange(event) {
        const { name, value, type, files} = event.target
        setRegisterData(prevRegisterData => ({
            ...prevRegisterData,
            [name]: type === "file" ? URL.createObjectURL(files[0]) : value 
        }))
    }
    
    const [erroMessageRemoval, setErroMessageRemoval] = React.useState(true)
    const [errorMassageFromServer, setErrorMassageFromServer] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if ((RegisterData.password.length === 0)) {
            setErrorMassageFromServer("Empty fields are not Allowed")
            setErroMessageRemoval(false);
            return
        } else if (RegisterData.password != RegisterData.repeatPassword) {
            setErrorMassageFromServer("password and repeatPassword must be the same")
            setErroMessageRemoval(false);
            return
        }
        const RegisterDataPost = {
            id: RegisterData.username,
            password: RegisterData.password,
            name: RegisterData.nickname
        }
        fetch('https://localhost:' + Server.get() + '/API/register', {
            method:"POST", 
            headers: {"content-type": "application/json"},
            body: JSON.stringify(RegisterDataPost),
        }).then(res => {
            res.text().then(t => {
                Token.set(t)
            }).then(t => {
            if(res.ok) {
                history.push("/chatPage");
                props.updateUser(RegisterData.username);
            } else {
                setErrorMassageFromServer(Token.get());
                setErroMessageRemoval(false);
            }
        })})
    }

    return (
        <div id="registerArea">
            <h1 className="display-3" id="welcomRegister">Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="Username" className="form-control" placeholder="Enter Username" id="inputUsername3"
                            name="username" onChange={handleChange} value={RegisterData.username}></input>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Enter Password" id="inputPassword3"
                            name="password" onChange={handleChange} value={RegisterData.password}></input>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputRepeatPassword3" className="col-sm-2 col-form-label">Verify Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Verify Password" id="inputRepeatPassword3"
                            name="repeatPassword" onChange={handleChange} value={RegisterData.repeatPassword}></input>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputNickname3" className="col-sm-2 col-form-label">Nickname</label>
                    <div className="col-sm-10">
                        <input type="Nickname" className="form-control" placeholder="Enter Nickname" id="inputNickname3"
                            name="nickname" onChange={handleChange} value={RegisterData.nickname}></input>
                    </div>
                </div>
                <div className="mb-3"></div>
                <button type="submit" className="btn btn-primary" id="RegisterButton">Register</button>
                <div>{!erroMessageRemoval && <small className="invalid--data">{errorMassageFromServer}</small>}</div>
                <div id="registerdHelpBlock" className="form-text">
                    Already registerd? <Link className="click--here" to="/">Click here</Link> to login.
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;