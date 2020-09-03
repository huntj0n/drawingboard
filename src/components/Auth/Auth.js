import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Auth() {
    return (
        <div className="auth-container">
            <div className="auth">
                <div className="login">
                    <h4>Email: </h4><input/>
                    <h4>Password: </h4><input/>
                </div>
                <div className="register">
                    <h4>Username: </h4><input/>
                    <h4>Email: </h4><input/>
                    <h4>Title: </h4><input/>
                    <h4>Profile Pic: </h4><input/>
                    <h4>Phone Number: </h4><input/>
                </div>
                <Link to="/drawingboard"><button>Login to the dashbaord</button></Link>
                <Link><button>Register</button></Link>
                <Link to="/"><button>return to landing</button></Link>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {
        username: reduxState.user.username,
        
    }
}
export default connect(mapStateToProps, {})(Auth)
