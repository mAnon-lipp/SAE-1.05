// Charger et lire le fichier template.html
const templateFile = await fetch("Final/cta/template.html");
const template = await templateFile.text();

let CallToAction = {};

// Fonction pour formater la section de call-to-action
CallToAction.format = function(r) {
    let html = template;
    html = html.replace('{{ctaImageSrc}}', r.ctaImageSrc);
    html = html.replace('{{ctaImageAlt}}', r.ctaImageAlt);
    html = html.replace('{{ctaTitle}}', r.ctaTitle);
    html = html.replace('{{ctaSubtitle}}', r.ctaSubtitle);
    html = html.replace('{{ctaButtonText}}', r.ctaButtonText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
CallToAction.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = CallToAction.format(what);
};

export { CallToAction };
