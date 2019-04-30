import { getActorRenderData } from './utils.js';
import actors from './actors.js';
import $ from 'jquery';
import _ from 'lodash';

import './style.css';

$('body').append('<ul class="actors"></ul>');

_.forEach(actors, (actor) => {
    const actorRenderData = getActorRenderData(actor);

    $('.actors').append(`<li>${actorRenderData}</li>`);
});