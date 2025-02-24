// Charger et lire les fichiers templates
    const templateFile = await fetch("component/Navigation/nav1/template.html");
    const template = await templateFile.text();

    const templateFileLink = await fetch("component/Navigation/nav1/templateLink.html");
    const templateLink = await templateFileLink.text();

let Nav1 = {};

// Fonction pour formater les liens de la barre de navigation
Nav1.formatOneLink = function(l) {
    let html = templateLink;
    html = html.replace('{{href}}', l.href);
    html = html.replace('{{text}}', l.text);
    return html;
};

// Fonction pour formater la section navbar
Nav1.format = function(r) {

    let html = template;
    let navbarLinks = "";
    for (let l of r.navbarLinks) {
        navbarLinks += Nav1.formatOneLink(l);
    }
    html = html.replace('{{navbarLinks}}', navbarLinks);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Nav1.render =function(where, what) {
    let element = document.querySelector(where);

    element.innerHTML = Nav1.format(what);
};

export { Nav1 };
