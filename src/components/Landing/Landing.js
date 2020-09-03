import React from 'react'
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>this is the Landing Page</h1>
            <header>
                <div className="header-logo">LOGO</div>
                <div className="header-middle">main tabs</div>
                <div className="header-right">
                    <button>Login</button>
                    <button>{"Get Started >"}</button>
                </div>
                
            </header>
            <main>
                <Link to='/login'><button>login</button></Link>
                {/* <Link to='/drawingboard'><button>drawingboard</button></Link>
                <Link to='/calendar'><button>calendar</button></Link>
                <Link to='/profile'><button>profile</button></Link>
                <Link to='/messages'><button>Messages</button></Link> */}
                <section>One Platform, better teamwork</section>
                <section>
                    <h1>Manage everything in one workspace.</h1>
                    <p>See your tasks </p>
                </section>
                <section>Setup in minutes</section>
                <section>Integrate with your existing tools in a few clicks</section>
                <section>Visualize work with Views</section>
                <section>24/7 customer support</section>
                <section>Try Drawingboard for your team</section>
            </main>
            <footer></footer>
        </div>
    )
}

export default Landing
