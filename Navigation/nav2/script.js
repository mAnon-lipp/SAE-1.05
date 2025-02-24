// Charger et lire les fichiers templates
const templateFile = await fetch("component/Navigation/nav2/template.html");
const template = await templateFile.text();

const templateFileLink = await fetch("component/Navigation/nav2/templateLink.html");
const templateLink = await templateFileLink.text();

let Nav2 = {};

// Fonction pour formater les liens de la barre de navigation
Nav2.formatOneLink = function (l) {
  let html = templateLink;
  html = html.replace("{{href}}", l.href);
  html = html.replace("{{text}}", l.text);
  return html;
};

// Fonction pour formater la section navbar
Nav2.format = function (r) {
  let html = template;
  html = html.replace("{{logoText}}", r.logoText);
  html = html.replace("{{searchPlaceholder}}", r.searchPlaceholder);
  let navbarLinks = "";
  for (let l of r.navbarLinks) {
    navbarLinks += Nav2.formatOneLink(l);
    }
    html = html.replace('{{navLinks}}', navbarLinks);
    return html;
  };

// Fonction pour rendre le template formaté dans le DOM
Nav2.render = async function (where, what) {
  let element = document.querySelector(where);

  element.innerHTML = Nav2.format(what);
};

export { Nav2 };
