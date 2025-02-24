// Charger et lire le fichier template.html
const templateFile = await fetch("component/Call/call2/template.html");
const template = await templateFile.text();

let CtaSection = {};

// Fonction pour formater la section cta-section
CtaSection.format = function(r) {
    let html = template;
    html = html.replace('{{ctaText}}', r.ctaText);
    html = html.replace('{{primaryButtonText}}', r.primaryButtonText);
    html = html.replace('{{secondaryButtonText}}', r.secondaryButtonText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
CtaSection.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = CtaSection.format(what);
};

export { CtaSection };
