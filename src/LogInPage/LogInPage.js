import React from 'react';
import './LogInPage.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Token from '../Token.js';

function LogInPage(props) {
    const [loginData, setLoginData] = React.useState({
        username: "",
        password: ""
    })

    let history = useHistory();

    function handleChange(event) {
        const { name, value } = event.target
        setLoginData((prevloginData) => ({
            ...prevloginData,
            [name]: value
        }))
    }

    const [userValid] = React.useState(true)
    const [passwordValid] = React.useState(true)
    const [logInValid, setlogInValid] = React.useState(true)
                
    function handleSubmit(event) {
        event.preventDefault()
        const loginDataPost = {
            id: loginData.username,
            password: loginData.password
        }
        fetch('https://localhost:7267' + '/API/login', {
            method:"POST", 
            headers: {"content-type": "application/json"},
            body: JSON.stringify(loginDataPost),
        }).then(res => {
            res.text().then(t => {
                Token.set(t)
            })
            if(res.ok) {
                history.push("/chatPage");
                props.updateUser(loginData.username);
            } else {
                setlogInValid(false);
            }
        })
    }

    return (
        <div id="loginArea">
            <h1 className="display-3" id="welcomLogin">Welcome to Chatter! Please login</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="Username" className="form-control" placeholder="Enter Username" id="inputUsername3"
                            name="username" onChange={handleChange} value={loginData.username}></input>
                        <div>{!userValid && <small className="invalid--data">Enter Username!</small>}</div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Enter Password" id="inputPassword3"
                            name="password" onChange={handleChange} value={loginData.password}></input>
                            <div>{!passwordValid && <small className="invalid--data">Enter Password!</small>}</div>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary" id="loginButton">Login</button>
                <div>{!logInValid && <small className="invalid--data">Username or password incorrect</small>}</div>
                <div id="registerdHelpBlock" className="form-text">
                    Not registerd? <Link className="click--here" to="/register">Click here</Link> to register.
                </div>
                <div id="ratingPage" className="form-text">
                    Wanna rate Chatter? <a className="click--here" href="https://localhost:7071/">Click here</a> to redirect.  
                </div>
            </form>
        </div>
    );
}

export default LogInPage;
