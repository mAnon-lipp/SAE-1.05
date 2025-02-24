// Charger et lire le fichier template.html
const templateFile = await fetch("component/Navigation/nav4/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/nav4/templateLien.html");
const templateLien = await templateFile2.text();


let Navi = {};

// Fonction pour formater les liens de navigation du header
Navi.formatOneLink = function(l) {
    let html = templateLien;
    html = html.replace('{{text}}', l.text);
    return html;
};

// Fonction pour formater la section du header
Navi.format = function(r) {
    let html = template;
    html = html.replace('{{headerLogo}}', r.headerLogo);
    html = html.replace('{{textButton}}', r.textButton);

    let listeNavi = '';
    for (let l of r.headerNavLinks) {
        listeNavi += Navi.formatOneLink(l);
    }

    html = html.replace('{{headerNavLinks}}', listeNavi);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Navi.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Navi.format(what);
};

export { Navi };
