// Charger et lire le fichier template.html
const templateFile = await fetch("component/Content/content5/template.html");
const template = await templateFile.text();

let Description = {};

// Fonction pour formater la section description
Description.format = function(r) {
    let html = template;
    html = html.replace('{{descriptionText}}', r.descriptionText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Description.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Description.format(what);
};

export { Description };
