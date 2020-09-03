import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
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
const mapStateToProps = reduxState => {
    return {
        username: reduxState.user.username
    }
}

export default connect(mapStateToProps, {})(Drawingboard)
