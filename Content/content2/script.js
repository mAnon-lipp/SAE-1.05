// Charger et lire le fichier template.html
const templateFile = await fetch("component/Content/content2/template.html");
const template = await templateFile.text();

let ContentSection = {};

// Fonction pour formater la section content-section
ContentSection.format = function(r) {
    let html = template;
    html = html.replace('{{contentSubtitle}}', r.contentSubtitle);
    html = html.replace('{{contentTitle}}', r.contentTitle);
    html = html.replace('{{contentText}}', r.contentText);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
ContentSection.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = ContentSection.format(what);
};

export { ContentSection };
