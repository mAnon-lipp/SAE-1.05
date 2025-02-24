// Charger et lire le fichier template.html
const templateFile = await fetch("component/Card/card1/template.html");
const template = await templateFile.text();

let ProfileCard = {};

// Fonction pour formater la section profile-card
ProfileCard.format = function(r) {
    let html = template;
    html = html.replace('{{profileImageSrc}}', r.profileImageSrc);
    html = html.replace('{{profileImageAlt}}', r.profileImageAlt);
    html = html.replace('{{profileName}}', r.profileName);
    html = html.replace('{{profileJob}}', r.profileJob);
    return html;
};

// Fonction pour rendre le template formaté dans le DOM
ProfileCard.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = ProfileCard.format(what);
};

export { ProfileCard };
