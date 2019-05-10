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
            </div>
        );
    }

}

export default Help;