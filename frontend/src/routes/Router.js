import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Principal from '../pages/Principal'

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Principal}/>
                </Switch>
            </BrowserRouter>
        )
    }
}