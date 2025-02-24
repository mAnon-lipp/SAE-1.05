// Charger et lire les fichiers templates
async function loadTemplates() {
    const templateFile = await fetch("component/Ecommerce/ecommerce2/template.html");
    const template = await templateFile.text();

    const templateOptionFile = await fetch("component/Ecommerce/ecommerce2/templateOption.html");
    const templateOption = await templateOptionFile.text();

    return { template, templateOption };
}

let Flights = {};

// Fonction pour formater les options de vol
Flights.formatOption = function(option, templateOption) {
    let html = templateOption;
    html = html.replace('{{optionImageSrc}}', option.optionImageSrc);
    html = html.replace('{{optionImageAlt}}', option.optionImageAlt);
    html = html.replace('{{optionTitle}}', option.optionTitle);
    html = html.replace('{{optionPrice}}', option.optionPrice);
    html = html.replace('{{optionText}}', option.optionText);
    html = html.replace('{{primaryButtonText}}', option.primaryButtonText);
    html = html.replace('{{secondaryButtonText}}', option.secondaryButtonText);
    return html;
};

// Fonction pour formater la section flights
Flights.format = function(r, templates) {
    let { template, templateOption } = templates;

    let html = template;
    html = html.replace('{{flightsImageSrc}}', r.flightsImageSrc);
    html = html.replace('{{flightsImageAlt}}', r.flightsImageAlt);
    html = html.replace('{{flightsTitle}}', r.flightsTitle);
    html = html.replace('{{flightsDescription}}', r.flightsDescription);

    let flightsOptions = "";
    for (let option of r.flightsOptions) {
        flightsOptions += Flights.formatOption(option, templateOption);
    }
    html = html.replace('{{flightsOptions}}', flightsOptions);

    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Flights.render = async function(where, what) {
    let element = document.querySelector(where);
    let html = "";

    // Charger les templates
    let templates = await loadTemplates();

    html = Flights.format(what, templates);

    element.innerHTML = html;
};

export { Flights };
