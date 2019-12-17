import React, {Component} from 'react';
import './login.css';
import {connect} from 'react-redux';
import LoginForm from '../../../ui/forms/LoginForm/LoginForm'
import {AuthActionCreator} from '../../../../store/actions/AuthActionCreator'

class Login extends Component{

    submitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        this.props.login('login', 'assda')
    }

    render(){
        return(
            <React.Fragment>
                <h1>Login Form</h1>
                <LoginForm submitHandler={this.submitHandler} />
            </React.Fragment>
        );
    }
}

function mapDispatchtoProps(dispatch){
    return {
        login: (email, password) => dispatch(AuthActionCreator.login(email, password))
    }
}

export default connect(null, mapDispatchtoProps)(Login);