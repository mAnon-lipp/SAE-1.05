// Charger et lire les fichiers templates
async function loadTemplates() {
    const templateFile = await fetch("component/Footers/footers3/template.html");
    const template = await templateFile.text();

    const templateFileNavItem = await fetch("component/Footers/footers3/templateNavItem.html");
    const templateNavItem = await templateFileNavItem.text();

    return { template, templateNavItem };
}

let FooterSection = {};

// Fonction pour formater un élément de navigation
FooterSection.formatNavItem = function(navItem, templateNavItem) {
    let html = templateNavItem;
    html = html.replace('{{href}}', navItem.href);
    html = html.replace('{{text}}', navItem.text);
    return html;
};

// Fonction pour formater la section footer-section
FooterSection.format = function(r, templates) {
    let { template, templateNavItem } = templates;

    let html = template;

    let navItems = "";
    for (let navItem of r.navItems) {
        navItems += FooterSection.formatNavItem(navItem, templateNavItem);
    }
    html = html.replace('{{navItems}}', navItems);

    html = html.replace('{{footerTitle}}', r.footerTitle);
    html = html.replace('{{footerDescription}}', r.footerDescription);
    html = html.replace('{{privacyPolicyHref}}', r.privacyPolicyHref);
    html = html.replace('{{termsHref}}', r.termsHref);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
FooterSection.render = async function(where, what) {
    let element = document.querySelector(where);
    let html = "";

    // Charger les templates
    let templates = await loadTemplates();

    html = FooterSection.format(what, templates);

    element.innerHTML = html;
};

export { FooterSection };
