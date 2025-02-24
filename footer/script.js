// Charger et lire les fichiers templates
const templateFile = await fetch("Final/footer/template.html");
const template = await templateFile.text();

const templateFileNavItem = await fetch("Final/footer/templateNavLinks.html");
const templateNavItem = await templateFileNavItem.text();

const templateFileLink = await fetch("Final/footer/templateLinks.html");
const templateLink = await templateFileLink.text();

let Footer = {};

// Fonction pour formater un élément de navigation
Footer.formatNavItem = function (navItem) {
  let html = templateNavItem;
  html = html.replace("{{href}}", navItem.href);
  html = html.replace("{{text}}", navItem.text);
  return html;
};

// Fonction pour formater un lien
Footer.formatLink = function (link) {
  let html = templateLink;
  html = html.replace("{{href}}", link.href);
  html = html.replace("{{text}}", link.text);
  return html;
};

// Fonction pour formater lar footerr
Footer.format = function (r) {
  let html = template;

  let navItems = "";
  for (let navItem of r.footerNavLinks) {
    navItems += Footer.formatNavItem(navItem);
  }
  html = html.replace("{{navItems}}", navItems);

  let footerLinks = "";
  for (let link of r.footerLinks) {
    footerLinks += Footer.formatLink(link);
  }
  html = html.replace("{{footerLinks}}", footerLinks);

  html = html.replace("{{footerTitle}}", r.footerTitle);
  html = html.replace("{{footerDescription}}", r.footerDescription);

  return html;
};

// Fonction pour rendre le template formatté dans le DOM
Footer.render = function (where, what) {
  let element = document.querySelector(where);
  element.innerHTML = Footer.format(what);
};

export { Footer };
