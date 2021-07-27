import React,{Component} from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import login from './pages/login/login'
import admin from './pages/admin/admin'
export default class App extends Component{
     render(){
        return <BrowserRouter>
           <Switch>
               <Route path='/login' component={login}/>
               <Route path='/admin' component={admin}/>
               <Redirect path='/' to='/login' />
           </Switch>
        </BrowserRouter>
     }
}
