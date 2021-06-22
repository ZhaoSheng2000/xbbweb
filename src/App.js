import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './pages/Home'
import Index from './pages/Index/index'

import './App.less';

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path='/home' component={Index} />
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
