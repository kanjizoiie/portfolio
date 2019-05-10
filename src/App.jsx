import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import News from './components/news/News.jsx';
import Help from './components/help/Help.jsx';
import NotFound from './components/notfound/NotFound.jsx';

import './App.scss';
import './css/skeleton.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = 'container'>
                <Switch>
                    <Route default exact path = '/' component = { Help } />
                    <Route path = '/news' component = { News } />
                    <Route component = { NotFound } />
                </Switch>
            </div>
        );
    }
}

export default App;