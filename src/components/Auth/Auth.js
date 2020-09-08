import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import axios from 'axios';

function Auth(props) {
    //login
const [emailInput, setEmail] = useState("");
const [passwordInput, setPassword] = useState("");
    //register


//Change Handlers
const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
}

const handlePassword = (event) => {
    setPassword(event.target.value)
}

//Authorization
const login = () => {
    axios.post('/auth/login', {
        email: emailInput, 
        password: passwordInput
    })
        .then (res => {
            // props.loginUser(res.data);
            props.history.push(`/drawingboard`)
        }).catch(err => {
            alert(`username or password incorrect`)
            console.log(err)})  
}

const register = () => {
    axios.post(`/auth/register`, {
        email: emailInput, 
        password: passwordInput
    })
        .then(res => {
            // props.loginUser(res.data);
            props.history.push(`/drawingboard`)
        })
}

    return (
        <div className="auth-container">
            <div className="auth">
                <div className="login">
                    <h4>Email: </h4><input onChange={handleEmail} type="text" name='email' value={emailInput}/>
                    <h4>Password: </h4><input onChange={handlePassword} type="password" name='password' value={passwordInput}/>
                </div>
                {/* <div className="register">
                    <h4>Username: </h4><input />
                    <h4>Email: </h4><input />
                    <h4>Title: </h4><input/>
                    <h4>Profile Pic: </h4><input/>
                    <h4>Phone Number: </h4><input/>
                </div> */}
                <Link to="/drawingboard">drawingboard</Link>
                <button onClick={login}>Login to the dashbaord</button>
                <button onClick={register}>Register</button>
                <Link to="/"><button>return to landing</button></Link>
            </div>
            {console.log(emailInput)}
            {console.log(passwordInput)}
        </div>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Auth)
