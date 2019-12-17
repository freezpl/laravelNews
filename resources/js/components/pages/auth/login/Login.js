import React, {Component} from 'react';
import './login.css';
import {connect} from 'react-redux';
import AppForm from '../../../ui/forms/LoginForm/LoginForm'
//import {AuthActionCreator} from '../../../store/actions/authActionCreator'

class Login extends Component{

    render(){
        return(
            <React.Fragment>
                <h1>Login Form</h1>
                <AppForm />
            </React.Fragment>
        );
    }
}

function mapDispatchtoProps(dispatch){
    return {
       // login: (email, password) => dispatch(AuthActionCreator.login(email, password))
    }
}

export default connect(null, mapDispatchtoProps)(Login);