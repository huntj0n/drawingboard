import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from '../SideNav/SideNav';

function Calendar() {
    return (
        <div className="view">
            <div>
                <SideNav/>
            </div>
            <div>
                this is the calendar component
                <Link to="/drawingboard"><button>return to drawingbaord</button></Link>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {
        username: reduxState.user.username
    }
}

export default connect(mapStateToProps, {})(Calendar)
