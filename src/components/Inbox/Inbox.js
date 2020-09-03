import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
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
const mapStateToProps = reduxState => {
    return{
        username: reduxState.user.username
    }
        
}

export default connect(mapStateToProps, {})(Inbox)
