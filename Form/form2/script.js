// Charger et lire le fichier template.html
const templateFile = await fetch("component/Form/form2/template.html");
const template = await templateFile.text();

let Signup = {};

// Fonction pour formater la section signup
Signup.format = function(r) {
    let html = template;
    html = html.replace('{{signupTitle}}', r.signupTitle);
    html = html.replace('{{emailPlaceholder}}', r.emailPlaceholder);
    html = html.replace('{{passwordPlaceholder}}', r.passwordPlaceholder);
    html = html.replace('{{buttonText}}', r.buttonText);
    html = html.replace('{{signupTerms}}', r.signupTerms);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Signup.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Signup.format(what);
};

export { Signup };
