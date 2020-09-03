import React from 'react'
import {Link} from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

function Calendar() {
    return (
        <div className="view">
            <div>
                <SideNav/>
            </div>
            <div>
                this is the calendar component
                <Link to="/drawingbaord"><button>return to drawingbaord</button></Link>
            </div>
        </div>
    )
}

export default Calendar
