import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function SideNav() {
    return (
        <div className="sideNav">
            <Link to="/inbox"><button>head to your inbox</button></Link>
            <Link to="/profile"><button>head to your profile</button></Link>
            <Link to="/calendar"><button>head to your calendar</button></Link>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {
        username: reduxState.user.username
    }
}

export default connect(mapStateToProps, {})(SideNav)
