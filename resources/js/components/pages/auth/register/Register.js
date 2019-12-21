import React, {Component} from 'react';
import './register.css';
import RegisterForm from '../../../ui/forms/RegisterForm/RegisterForm'
import {AuthActionCreator} from '../../../../store/actions/AuthActionCreator'

class Register extends Component{

    render(){
        return(
            <React.Fragment>
                <h1>Registration</h1>
                <RegisterForm />
            </React.Fragment>
        );
    }
}


export default Register;