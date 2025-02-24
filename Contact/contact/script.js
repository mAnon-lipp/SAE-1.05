// Charger et lire le fichier template.html
const templateFile = await fetch("component/Contact/contact/template.html");
const template = await templateFile.text();

let Contact = {};

// Fonction pour formater la section contact
Contact.format = function(r) {
    let html = template;
    html = html.replace('{{contactTitle}}', r.contactTitle);
    html = html.replace('{{contactSubtitle}}', r.contactSubtitle);
    html = html.replace('{{contactPhone}}', r.contactPhone);
    html = html.replace('{{contactNamePlaceholder}}', r.contactNamePlaceholder);
    html = html.replace('{{contactEmailPlaceholder}}', r.contactEmailPlaceholder);
    html = html.replace('{{contactPhonePlaceholder}}', r.contactPhonePlaceholder);
    html = html.replace('{{contactBudgetPlaceholder}}', r.contactBudgetPlaceholder);
    html = html.replace('{{contactCompanySizePlaceholder}}', r.contactCompanySizePlaceholder);
    html = html.replace('{{contactMessagePlaceholder}}', r.contactMessagePlaceholder);
    html = html.replace('{{contactButtonText}}', r.contactButtonText);
    html = html.replace('{{helpTitle}}', r.helpTitle);
    html = html.replace('{{helpText}}', r.helpText);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Contact.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Contact.format(what);
};

export { Contact };
