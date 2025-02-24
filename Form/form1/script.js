// Charger et lire le fichier template.html
const templateFile = await fetch("component/Form/form1/template.html");
const template = await templateFile.text();

let Form = {};

// Fonction pour formater la section form
Form.format = function(r) {
    let html = template;
    html = html.replace('{{formCall}}', r.formCall);
    html = html.replace('{{emailPlaceholder}}', r.emailPlaceholder);
    html = html.replace('{{buttonText}}', r.buttonText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Form.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Form.format(what);
};

export { Form };
