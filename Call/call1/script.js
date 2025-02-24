// Charger et lire le fichier template.html
const templateFile = await fetch("component/Call/call1/template.html");
const template = await templateFile.text();

let Cta = {};

// Fonction pour formater la section cta
Cta.format = function(r) {
    let html = template;
    html = html.replace('{{ctaImageSrc}}', r.ctaImageSrc);
    html = html.replace('{{ctaImageAlt}}', r.ctaImageAlt);
    html = html.replace('{{ctaTitle}}', r.ctaTitle);
    html = html.replace('{{ctaText}}', r.ctaText);
    html = html.replace('{{ctaButtonText}}', r.ctaButtonText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Cta.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Cta.format(what);
};

export { Cta };
