import React from 'react'
import {Link} from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

function Drawingboard() {
    return (
        <div className="view">
            <SideNav/>
            this is the Drawingboard component
            <Link to="/"><button>return to landing</button></Link>
            

        </div>
    )
}

export default Drawingboard
