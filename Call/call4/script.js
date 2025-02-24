// Charger et lire le fichier template.html
const templateFile = await fetch("component/Call/call4/template.html");
const template = await templateFile.text();

let CtaContainer = {};

// Fonction pour formater la section cta-container
CtaContainer.format = function(data) {
    let html = template;
    html = html.replace('{{ctaTitle}}', data.ctaTitle);
    html = html.replace('{{ctaDescription}}', data.ctaDescription);
    html = html.replace('{{buttonHref}}', data.buttonHref);
    html = html.replace('{{buttonText}}', data.buttonText);
    html = html.replace('{{ctaLicense}}', data.ctaLicense);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
CtaContainer.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = CtaContainer.format(what);
};

export { CtaContainer };
