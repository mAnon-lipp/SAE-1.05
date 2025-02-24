// Charger et lire le fichier template.html
const templateFile = await fetch("component/Card/card2/template.html");
const template = await templateFile.text();

let Card = {};

// Fonction pour formater la section card
Card.format = function(r) {
    let html = template;
    html = html.replace('{{cardImageSrc}}', r.cardImageSrc);
    html = html.replace('{{cardImageAlt}}', r.cardImageAlt);
    html = html.replace('{{cardDescription}}', r.cardDescription);
    html = html.replace('{{cardAuthor}}', r.cardAuthor);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Card.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Card.format(what);
};

export { Card };
