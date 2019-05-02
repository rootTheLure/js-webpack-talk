import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    getCharacter,
    getPicture,
    getActorLabel
} from '../utils/actor.utils';

class Actor extends Component {
    render() {
        const { actorData } = this.props;
        const character = getCharacter(actorData);
        const picture = getPicture(actorData);
        const label = getActorLabel(actorData.name);

        return (
            <span className='actor'>
                <img className='actor-picture' src={picture}/>
                <div class='actor-name'>{label}</div>
                <div class='actor-character'>{character}</div>
            </span>
        )
    }
}

export default Actor;
