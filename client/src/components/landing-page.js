import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
        <div className= "intro">Welcome to Crypto-Project
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
            <div className="sp-container">
            <div className="sp-content">
            <div className="sp-globe"></div>
                <h2 className="frame-1">WELCOME</h2>
                <h2 className="frame-2">TO</h2>
                <h2 className="frame-3">CRYPTO-PROJECT</h2>
                <h2 className="frame-4"></h2>
                <h2 className="frame-5">
                <div><span>1400</span></div>
                <div><span>CRYPTOCURRENCIES</span></div>
                <span></span>
            </h2>
       
        </div>
        </div>
         </div>
            
        
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);