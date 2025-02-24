// Charger et lire le fichier template.html
const templateFile = await fetch("component/Content/content1/template.html");
const template = await templateFile.text();

let Container = {};

// Fonction pour formater la section container
Container.format = function(r) {
    let html = template;
    html = html.replace('{{containerTitle}}', r.containerTitle);
    html = html.replace('{{containerText}}', r.containerText);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Container.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Container.format(what);
};

export { Container };
