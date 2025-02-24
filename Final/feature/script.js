// Charger et lire le fichier template.html
const templateFile = await fetch("Final/feature/template.html");
const template = await templateFile.text();

// Charger et lire le fichier templateFeature.html
const templateFile2 = await fetch("Final/feature/templateFeature.html");
const templateFeature = await templateFile2.text();

let Feature = {};

// Fonction pour formater une fonctionnalité
Feature.formatOneFeature = function(list) {
    let html = templateFeature;
    html = html.replace('{{title}}', list.title);
    html = html.replace('{{description}}', list.description);
    return html;
};

// Fonction pour formater la section des fonctionnalités
Feature.format = function(r) {

    let html = template;
    html = html.replace('{{featuresTitle}}', r.title);
    html = html.replace('{{featuresDescription}}', r.description);

    let listeFeatures = '';
    for (let feature of r.list) {
        listeFeatures += Feature.formatOneFeature(feature);
    }

    html = html.replace('{{featuresList}}', listeFeatures);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Feature.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Feature.format(what);
};

export { Feature };