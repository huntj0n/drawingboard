import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Landing() {
    return (
        <div className="landing">
            <header>
                <div className="header-content">
                    <div className="header-logo">DRAWINGBOARD.COM</div>
                    <div>
                        <Link to='/login'>
                            <button className='btn'>Login</button>
                        </Link>
                        <button className="btn btn-register">{"Get Started >"}</button>
                    </div>
                </div>         
            </header>
            <main>
               
                <section className='landing-section-1'>
                    <div className="landing-left">
                        <h1>One platform, better teamwork.</h1>
                        <p>Highly effective teams choose Drawingboard to easily manage their work</p>
                        <button className="btn btn-register">{"Get Started >"}</button>
                    </div>
                    <div  className="landing-right">
                       <img 
                        src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'
                        alt=""
                       />
                    </div>
                </section>

                <section className='landing-section-2'>
                    <div className="land-left">
                        <img 
                            src=''
                            alt=""
                        />
                    </div>
                    <div className="land-right">
                        <h1>Manage everything in one workspace.</h1>
                        <p>Set up in minutes. Planning, tracking, and delivering your teams work has never been easier </p>

                    </div>
                    <div className=''/>
                </section>
                
                <section>
                    24/7 customer support
                </section>

                <section>
                    Try Drawingboard for your team
                <button className='btn btn-register'>{"Get Started >"}</button>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return{
        username: reduxState.user.username
    }
}

export default connect(mapStateToProps, {})(Landing)
