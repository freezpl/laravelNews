  
import React, {Component} from 'react'
import { Switch, Redirect} from 'react-router'
import AppRoute from './AppRoute'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'
import CommonLayout from '../layouts/CommonLayout/CommonLayout'

import Login from '../components/pages/auth/login/Login'
import NewsList from '../components/pages/common/news/NewsList'


export default class AppRoutes extends Component{

  render(){
    return (
      <Switch>
         <AppRoute path="/" exact component={NewsList} layout={CommonLayout} title='News List'/>
         <AppRoute path="/login" exact component={Login} layout={AuthLayout} title='Login to system'/>
         {/* <Redirect to="/404" />  */}
      </Switch>
    );
  }
}