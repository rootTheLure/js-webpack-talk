import { getActorRenderData } from './utils.js';
import actors from './actors.js';
// import $ from '../node_modules/jquery/dist/jquery.js';


const actorsEL = $('.actors');

_.forEach(actors, (actor) => {
    const actorRenderData = getActorRenderData(actor);

    actorsEL.append(`<li>${actorRenderData}</li>`);
});