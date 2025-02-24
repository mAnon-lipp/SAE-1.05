// Charger et lire le fichier template.html
const templateFile = await fetch("component/Header/header2/template.html");
const template = await templateFile.text();

let Hero = {};

// Fonction pour formater la section hero
Hero.format = function(r) {
    let html = template;
    html = html.replace('{{heroTitle}}', r.heroTitle);
    html = html.replace('{{heroDescription}}', r.heroDescription);
    html = html.replace('{{heroButtonLink}}', r.heroButtonLink);
    html = html.replace('{{heroButtonText}}', r.heroButtonText);
    html = html.replace('{{heroSignupTitle}}', r.heroSignupTitle);
    html = html.replace('{{heroSignupEmailPlaceholder}}', r.heroSignupEmailPlaceholder);
    html = html.replace('{{heroSignupPasswordPlaceholder}}', r.heroSignupPasswordPlaceholder);
    html = html.replace('{{heroSignupCheckboxText}}', r.heroSignupCheckboxText);
    html = html.replace('{{heroSignupButtonText}}', r.heroSignupButtonText);
    html = html.replace('{{heroSignupSeparatorText}}', r.heroSignupSeparatorText);
    html = html.replace('{{heroSignupTwitterText}}', r.heroSignupTwitterText);
    html = html.replace('{{heroSigninText}}', r.heroSigninText);
    html = html.replace('{{heroSigninLink}}', r.heroSigninLink);
    html = html.replace('{{heroSigninLinkText}}', r.heroSigninLinkText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Hero.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Hero.format(what);
};

export { Hero };
