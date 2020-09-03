import React from 'react'
import {Link} from 'react-router-dom';

function SideNav() {
    return (
        <div className="sideNav">
            <Link to="/inbox"><button>head to your inbox</button></Link>
            <Link to="/profile"><button>head to your profile</button></Link>
            <Link to="/calendar"><button>head to your calendar</button></Link>
        </div>
    )
}

export default SideNav
