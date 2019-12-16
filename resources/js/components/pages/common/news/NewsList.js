import React, {Component} from 'react';
import './news.css';
import {connect} from 'react-redux';
//import {AuthActionCreator} from '../../../store/actions/authActionCreator'

class NewsList extends Component{    
    
    state = {
        email: 'a@a.ua',
        password: '123456'
    }
    
    componentDidMount() {
    document.title = this.props.title;
    }

    render(){
        return(
            <div className="login">
             <h2>News List</h2>
            </div>
        );
    }
}

// function mapDispatchtoProps(dispatch){
//     return {
//         login: (email, password) => dispatch(AuthActionCreator.login(email, password))
//     }
// }

//export default connect(null, mapDispatchtoProps)(NewsList);
export default connect()(NewsList);