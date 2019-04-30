import { getActorRenderData } from './utils.js';
import actors from './actors.js';
// import $ from 'jquery';


const actorsEL = $('.actors');

_.forEach(actors, (actor) => {
    const actorRenderData = getActorRenderData(actor);

    actorsEL.append(`<li>${actorRenderData}</li>`);
});