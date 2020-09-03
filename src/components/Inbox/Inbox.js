import React from 'react';
import {Link} from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

function Inbox() {
    return (
        <div className="view">
            <SideNav/>
            <div className="view">
                This is the Messages component!
                <Link to="/drawingboard"><button>return to drawingboard</button></Link>
            </div>
        </div>
    )
}

export default Inbox
