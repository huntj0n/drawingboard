import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';
import Calendar from './components/Calendar/Calendar';
import Drawingboard from './components/Drawingboard/Drawingboard';
import Profile from './components/Profile/Profile';
import Inbox from './components/Inbox/Inbox';


export default (
    <Switch>
        <Route exact path ='/' component={Landing}/>
        <Route path ='/login' component={Auth}/>
        <Route path ='/drawingboard' component={Drawingboard}/>
        <Route path ='/calendar' component={Calendar}/>
        <Route exact path ='/inbox' component={Inbox}/>
        <Route path ='/profile' component={Profile}/>
    </Switch>
)