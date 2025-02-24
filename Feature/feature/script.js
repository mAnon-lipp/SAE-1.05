// Charger et lire les fichiers templates
async function loadTemplates() {
    const templateFile = await fetch("component/Feature/feature/template.html");
    const template = await templateFile.text();

    const templateFileFeature = await fetch("component/Feature/feature/templateFeature.html");
    const templateFeature = await templateFileFeature.text();

    return { template, templateFeature };
}

let Features = {};

// Fonction pour formater un élément individuel de la liste des fonctionnalités
Features.formatFeature = function(feature, templateFeature) {
    let html = templateFeature;
    html = html.replace('{{featureTitle}}', feature.featureTitle);
    html = html.replace('{{featureDescription}}', feature.featureDescription);
    return html;
};

// Fonction pour formater la section features
Features.format = function(r, templates) {
    let { template, templateFeature } = templates;

    let html = template;
    html = html.replace('{{featuresTitle}}', r.featuresTitle);
    html = html.replace('{{featuresDescription}}', r.featuresDescription);

    let featuresList = "";
    for (let feature of r.featuresList) {
        featuresList += Features.formatFeature(feature, templateFeature);
    }
    html = html.replace('{{featuresList}}', featuresList);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Features.render = async function(where, what) {
    let element = document.querySelector(where);
    let html = "";

    // Charger les templates
    let templates = await loadTemplates();

    html = Features.format(what, templates);

    element.innerHTML = html;
};

export { Features };
