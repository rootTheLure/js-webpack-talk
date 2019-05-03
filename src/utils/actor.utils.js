import _ from 'lodash';

const defaultPictureURI = 'https://via.placeholder.com/200x350';

export function getCharacter(actor) {
    const {
        characterName,
        pseudonym,
    } = actor;

    let result = '';

    if (characterName !== pseudonym) {
        result = `${characterName} - ${pseudonym}`;
    } else {
        result = characterName ? characterName : pseudonym;
    }

    return result;
}

export function getPicture(actor) {
    return actor && actor.picture ? actor.picture : defaultPictureURI;
}

export function getActorLabel(actorName) {
    return `Actor: ${actorName}`;
}

export function getActorRenderData(actor) {
    const character = getCharacter(actor);
    const picture = getPicture(actor);

    return `<span class="actor"><img class="actor-picture" src="${picture}"/><div class="actor-name">Actor: ${actor.name}</div><div class="actor-character">${character}</div></span>`
}
