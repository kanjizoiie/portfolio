import React, { Component } from 'react';
import './Help.scss';

class Help extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <div>
                <h1>Help</h1>
                <h2>This page will display some helpful text</h2>
                <p>I am currently running some tests on the text that shows how it wsould work if everything is correct</p>
            </div>
        );
    }

}

export default Help;