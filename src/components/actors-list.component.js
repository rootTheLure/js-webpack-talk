import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash/fp/map';

import Actor from './actor.component';

const renderItems = () => (
    map(item => (
        <li><Actor actorData={item}/></li>
      )
    )
);

class ActorsList extends Component {
    render() {
        const { items } = this.props;

        return (
            <ul className='actors'>
                {renderItems()(items)}
            </ul>
        )
    }
}

export default ActorsList;

// $('body').append('<ul class="actors"></ul>');

// _.forEach(actors, (actor) => {
//     const actorRenderData = getActorRenderData(actor);

//     $('.actors').append(`<li>${actorRenderData}</li>`);
// });