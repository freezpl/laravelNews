  
import React, {Component, Suspense, Loader} from 'react'
import { Switch, Redirect} from 'react-router'
import AppRoute from './AppRoute'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'
import CommonLayout from '../layouts/CommonLayout/CommonLayout'

const Login = React.lazy(() => import('../components/pages/auth/login/Login'))
const Register = React.lazy(() => import('../components/pages/auth/register/Register'))
const NewsList = React.lazy(() => import('../components/pages/common/news/NewsList'))

export default class AppRoutes extends Component{

  render(){
    return (
       <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
         <AppRoute path="/" exact component={NewsList} layout={CommonLayout} title='News List'/>
         <AppRoute path="/login" exact component={Login} layout={AuthLayout} title='Login to system'/>
         <AppRoute path="/register" exact component={Register} layout={AuthLayout} title='Register page'/>
         {/* <Redirect to="/404" />  */}
      </Switch>
       </Suspense>
    );
  }
}