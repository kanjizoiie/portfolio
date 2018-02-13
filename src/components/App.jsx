import React, { Component } from 'react';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.setText = this.setText.bind(this);
    }

    setText(event) {
        this.setState({
            text: event.target.value 
        });
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange = { this.setText }/>
                    { this.state.text }
                </form>
            </div>
        );
    }
}

export default App;