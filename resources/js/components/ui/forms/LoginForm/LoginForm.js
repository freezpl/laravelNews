import React, {Component} from 'react';
import classnames from 'classnames'
import InputGroup from '../../controls/InputGroup/InputGroup'
import {rules} from '../rules'

class LoginForm extends Component{

    state = {
        controls:{
            email:{
                type:'email',
                field: 'email',
                label: 'Email',
                value: '',
                errors: [],
                rules: [rules.required, rules.email]
            }
            
        },
        errors: {

        },
        isFormValid:false
    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        name = e.target.name;
        value = e.target.value;

        this.setState({
           // controls.email.value : 
        });
        //this.setStateByErrors(e.target.name, e.target.value);
    };

    render(){
    return (
        <form name="form" onSubmit={this.props.handleSubmit}>
                    <InputGroup
                        type = {this.state.controls.email.type}
                        label={this.state.controls.email.label}
                        field={this.state.controls.email.field}
                        value={this.state.controls.email.value}
                        errors={this.state.controls.email.errors}
                        onChange={this.handleChange}
                    />

                    <div className="form-group">
                        <button className="btn btn-primary">
                            Login
                        </button>
                    </div>
        </form>
    );
    }
}

export default LoginForm;