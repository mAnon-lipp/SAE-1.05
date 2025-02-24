// Charger et lire le fichier template.html
const templateFile = await fetch("Final/showcase/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("Final/showcase/templateWorks.html");
const templateWork = await templateFile2.text();


let Showcase = {};

// Fonction pour formater les liens de navigation du Showcase
Showcase.formatOneWork = function(w) {
    let html = templateWork;
    html = html.replace('{{imageSrc}}', w.imageSrc);
    html = html.replace('{{imageAlt}}', w.imageAlt);
    html = html.replace('{{category}}', w.category);
    html = html.replace('{{title}}', w.title);
    return html;
};

// Fonction pour formater la section du Showcase
Showcase.format = function(r) {
    let html = template;
    html = html.replace('{{showcaseTitle}}', r.showcaseTitle);
    html = html.replace('{{showcaseButtonText}}', r.showcaseButtonText);

    let listeShowcase = '';
    for (let w of r.showcaseWorks) {
        listeShowcase += Showcase.formatOneWork(w);
    }

    html = html.replace('{{showcaseWorks}}', listeShowcase);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Showcase.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Showcase.format(what);
};

export { Showcase };
