import React, {Component} from 'react';
import './login.css';
import LoginForm from '../../../ui/forms/LoginForm/LoginForm'
import {AuthActionCreator} from '../../../../store/actions/AuthActionCreator'

class Login extends Component{

    constructor(props){
        console.log('Login');
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <h1>Login Form</h1>
                <LoginForm />
            </React.Fragment>
        );
    }
}


export default Login;