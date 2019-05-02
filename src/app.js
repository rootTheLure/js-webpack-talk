import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ActorsList from './components/actors-list.component'

import actors from './data/actors.js';

import './style.scss';

class App extends Component {
    render() {
        return (
          <ActorsList items={actors} />
        )
    }
}

export default App;