import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <div>
                <h1>ERROR 404</h1>
                <h2>Page was not found</h2>
            </div>
        );
    }

}

export default NotFound;