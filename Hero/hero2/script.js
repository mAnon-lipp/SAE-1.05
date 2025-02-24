// Charger et lire les fichiers templates
    const templateFile = await fetch("component/Hero/hero2/template.html");
    const template = await templateFile.text();

    const templateFileNavItem = await fetch("component/Hero/hero2/templateNavItem.html");
    const templateNavItem = await templateFileNavItem.text();

    const templateFileInfoItem = await fetch("component/Hero/hero2/templateInfoItem.html");
    const templateInfoItem = await templateFileInfoItem.text();

    const templateFileRightNavItem = await fetch("component/Hero/hero2/templateRightNavItem.html");
    const templateRightNavItem = await templateFileRightNavItem.text();


let Header3 = {};

// Fonction pour formater un élément de la liste de navigation
Header3.formatNavItem = function(navItem) {
    let html = templateNavItem;
    html = html.replace('{{href}}', navItem.href);
    html = html.replace('{{text}}', navItem.text);
    return html;
};

// Fonction pour formater un élément d'information
Header3.formatInfoItem = function(infoItem) {
    let html = templateInfoItem;
    html = html.replace('{{subtitle}}', infoItem.subtitle);
    html = html.replace('{{text}}', infoItem.text);
    return html;
};

// Fonction pour formater un élément de navigation à droite
Header3.formatRightNavItem = function(rightNavItem) {
    let html = templateRightNavItem;
    html = html.replace('{{href}}', rightNavItem.href);
    html = html.replace('{{linkClass}}', rightNavItem.linkClass);
    html = html.replace('{{text}}', rightNavItem.text);
    return html;
};

// Fonction pour formater la section header3
Header3.format = function(r) {

    let html = template;

    let navItems = "";
    for (let navItem of r.navItems) {
        navItems += Header3.formatNavItem(navItem);
    }
    html = html.replace('{{navItems}}', navItems);

    let rightNavItems = "";
    for (let rightNavItem of r.rightNavItems) {
        rightNavItems += Header3.formatRightNavItem(rightNavItem);
    }
    html = html.replace('{{rightNavItems}}', rightNavItems);

    let infoItems = "";
    for (let infoItem of r.infoItems) {
        infoItems += Header3.formatInfoItem(infoItem);
    }
    html = html.replace('{{infoItems}}', infoItems);

    html = html.replace('{{brandName}}', r.brandName);
    html = html.replace('{{headerTitle}}', r.headerTitle);
    html = html.replace('{{videoSrc}}', r.videoSrc);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Header3.render = async function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Header3.format(what);
};

export { Header3 };
