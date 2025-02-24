// Charger et lire les fichiers templates
async function loadTemplates() {
    const templateFile = await fetch("component/Footers/footers1/template.html");
    const template = await templateFile.text();

    const templateFileLink = await fetch("component/Footers/footers1/templateLink.html");
    const templateLink = await templateFileLink.text();

    const templateFileNav = await fetch("component/Footers/footers1/templateNav.html");
    const templateNav = await templateFileNav.text();

    return { template, templateLink, templateNav };
}

let Footer1 = {};

// Fonction pour formater un élément de lien
Footer1.formatLink = function(link, templateLink) {
    let html = templateLink;
    html = html.replace('{{href}}', link.href);
    html = html.replace('{{text}}', link.text);
    return html;
};

// Fonction pour formater un élément de navigation
Footer1.formatNav = function(navItem, templateNav) {
    let html = templateNav;
    html = html.replace('{{href}}', navItem.href);
    html = html.replace('{{text}}', navItem.text);
    return html;
};

// Fonction pour formater la section footer1
Footer1.format = function(r, templates) {
    let { template, templateLink, templateNav } = templates;

    let html = template;
    html = html.replace('{{footerTitle}}', r.footerTitle);

    let footerLinks = "";
    for (let link of r.footerLinks) {
        footerLinks += Footer1.formatLink(link, templateLink);
    }
    html = html.replace('{{footerLinks}}', footerLinks);

    let footerNav = "";
    for (let navItem of r.footerNav) {
        footerNav += Footer1.formatNav(navItem, templateNav);
    }
    html = html.replace('{{footerNav}}', footerNav);

    html = html.replace('{{footerText}}', r.footerText);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Footer1.render = async function(where, what) {
    let element = document.querySelector(where);
    let html = "";

    // Charger les templates
    let templates = await loadTemplates();

    html = Footer1.format(what, templates);

    element.innerHTML = html;
};

export { Footer1 };
