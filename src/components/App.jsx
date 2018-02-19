import React, { Component } from 'react';
import News from './news/News.jsx';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <News posts = {[{
                title: 'Woo',
                text: 'THIS IS WORKING',
                link: 'NOTHING WILL BREAK ME',
                date: 'PropTypes.string'
            },{
                title: 'Well, this was amazing',
                text: 'THIS IS WORKING',
                link: 'NOTHING WILL BREAK ME',
                date: 'PropTypes.string'
            },{
                title: 'Nothing is as strong as this.',
                text: 'THIS IS WORKING',
                link: 'NOTHING WILL BREAK ME',
                date: 'PropTypes.string'
            },{
                title: 'I used to clean my toilet, but when I saw THIS i changed my mind.',
                text: 'THIS IS WORKING',
                link: 'NOTHING WILL BREAK ME',
                date: 'PropTypes.string'
            }]} />
        );
    }
}

export default App;