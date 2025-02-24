// Charger et lire le fichier template.html
const templateFile = await fetch("component/Call/call3/template.html");
const template = await templateFile.text();

let Call = {};

// Fonction pour formater la section call-to-action
Call.format = function(r) {
    let html = template;
    html = html.replace('{{ctaImageSrc}}', r.ctaImageSrc);
    html = html.replace('{{ctaImageAlt}}', r.ctaImageAlt);
    html = html.replace('{{ctaTitle}}', r.ctaTitle);
    html = html.replace('{{ctaSubtitle}}', r.ctaSubtitle);
    html = html.replace('{{ctaButtonText}}', r.ctaButtonText);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Call.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Call.format(what);
};

export { Call };
