// Charger et lire le fichier template.html
const templateFile = await fetch("component/Form//form/template.html");
const template = await templateFile.text();

let DemoSection = {};

// Fonction pour formater la section demo-section
DemoSection.format = function(r) {
    let html = template;
    html = html.replace('{{demoTitle}}', r.demoTitle);
    html = html.replace('{{demoDescription}}', r.demoDescription);
    html = html.replace('{{emailPlaceholder}}', r.emailPlaceholder);
    html = html.replace('{{buttonText}}', r.buttonText);
    html = html.replace('{{imageSrc}}', r.imageSrc);
    html = html.replace('{{imageAlt}}', r.imageAlt);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
DemoSection.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = DemoSection.format(what);
};

export { DemoSection };
