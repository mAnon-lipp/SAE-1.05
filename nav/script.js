// Charger et lire les fichiers templates
    const templateFile = await fetch("Final/nav/template.html");
    const template = await templateFile.text();

    const templateFileNavItem = await fetch("Final/nav/templateNavItem.html");
    const templateNavItem = await templateFileNavItem.text();

    const Nav = {};
// Fonction pour formater un élément de la liste de navigation
Nav.formatNavItem = function(navItem) {
    let html = templateNavItem;
    html = html.replace('{{href}}', navItem.href);
    html = html.replace('{{text}}', navItem.text);
    html = html.replace('{{navItemClass}}', navItem.navItemClass);
    html = html.replace('{{linkClass}}', navItem.linkClass);
    return html;
};

// Fonction pour formater la section header
Nav.format = function(r) {
    let html = template;
    let navItems = "";
    for (let navItem of r.navItems) {
        navItems += Nav.formatNavItem(navItem);
    }
    html = html.replace('{{navItems}}', navItems);

    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Nav.render = function(where, what) {
    let element = document.querySelector(where);

    element.innerHTML = Nav.format(what);
};

export { Nav };
