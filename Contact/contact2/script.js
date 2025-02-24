// Charger et lire les fichiers templates
const templateFile = await fetch("component/Contact/contact2/template.html");
const template = await templateFile.text();

const templateFileMap = await fetch("component/Contact/contact2/templateMap.html");
const templateMap = await templateFileMap.text();

const templateFileForm = await fetch("component/Contact/contact2/templateForm.html");
const templateForm = await templateFileForm.text();

const templateFileInfo = await fetch("component/Contact/contact2/templateInfo.html");
const templateInfo = await templateFileInfo.text();

const templateFileSocialItem = await fetch("component/Contact/contact2/templateSocialItem.html");
const templateSocialItem = await templateFileSocialItem.text();

let GetInTouch = {};

// Fonction pour formater la carte
GetInTouch.formatMap = function(data) {
    let html = templateMap;
    html = html.replace('{{mapSrc}}', data.mapSrc);
    return html;
};

// Fonction pour formater le formulaire
GetInTouch.formatForm = function(d) {
    let html = templateForm;
    html = html.replace('{{formTitle}}', d.formTitle);
    html = html.replace('{{formDescription}}', d.formDescription);
    html = html.replace('{{emailPlaceholder}}', d.emailPlaceholder);
    html = html.replace('{{messagePlaceholder}}', d.messagePlaceholder);
    html = html.replace('{{namePlaceholder}}', d.namePlaceholder);
    html = html.replace('{{buttonText}}', d.buttonText);
    return html;
};

// Fonction pour formater les informations
GetInTouch.formatInfo = function(a) {
    let html = templateInfo;
    html = html.replace('{{infoTitle}}', a.infoTitle);
    html = html.replace('{{infoDescription}}', a.infoDescription);
    html = html.replace('{{phone}}', a.phone);
    html = html.replace('{{email}}', a.email);

    let socialsItems = "";
    for (let socialItem of a.socialsItems) { // Correction ici
        let itemHtml = templateSocialItem;
        itemHtml = itemHtml.replace('{{href}}', socialItem.href);
        itemHtml = itemHtml.replace('{{socialName}}', socialItem.socialName);
        socialsItems += itemHtml;
    }
    html = html.replace('{{socialsItems}}', socialsItems);

    html = html.replace('{{socialsTitle}}', a.socialsTitle);
    return html;
};

// Fonction pour formater la section get-in-touch
GetInTouch.format = function(data) {

    let html = template;

    let mapHtml = GetInTouch.formatMap(data);
    html = html.replace('{{map}}', mapHtml);

    let formHtml = GetInTouch.formatForm(data);
    html = html.replace('{{form}}', formHtml);

    let infoHtml = GetInTouch.formatInfo(data);
    html = html.replace('{{info}}', infoHtml);

    return html;
};

// Fonction pour rendre le template formaté dans le DOM
GetInTouch.render = async function(where, what) {
    let element = document.querySelector(where);
    if (!element) {
        console.error('Element not found:', where);
        return;
    }
    element.innerHTML = GetInTouch.format(what);
};

export { GetInTouch };