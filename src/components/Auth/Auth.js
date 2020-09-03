import React from 'react'
import {Link} from 'react-router-dom';

function Auth() {
    return (
        <div>
            <Link to="/"><button>return to landing</button></Link>
            <div>
                <h4>Email: </h4><input/>
                <h4>Password: </h4><input/>
            </div>
                <Link to="/drawingboard"><button>Login to the dashbaord</button></Link>
                <Link><button>Register</button></Link>
        </div>
    )
}

export default Auth
