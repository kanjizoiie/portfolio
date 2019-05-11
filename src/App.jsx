import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import News from './components/news/News.jsx';
import Help from './components/help/Help.jsx';
import NotFound from './components/notfound/NotFound.jsx';
import Menu from './components/menu/Menu.jsx';

import NewsJson from './json/news.json';

import './App.scss';
import './css/skeleton.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'wrapper'>            
                <Menu />
                <div className = 'container'>
                    <Switch>
                        <Route default exact path = '/' render = { () => <Help /> } />
                        <Route path = '/news' render = { () => <News posts = { NewsJson.posts } /> } />
                        <Route render = { () => <NotFound /> } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;