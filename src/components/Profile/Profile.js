import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from '../SideNav/SideNav';

function Profile() {
    return (
        <div className="view">
            <SideNav/>
            This is the profile component
            <Link to="/drawingboard"><button>return to drawingboard</button></Link>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {
        username: reduxState.user.username
    }
}

export default connect(mapStateToProps, {})(Profile)
