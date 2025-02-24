// Charger et lire les fichiers templates
async function loadTemplates() {
    const templateFile = await fetch("component/Footers/footers2/template.html");
    const template = await templateFile.text();

    const templateFileLink = await fetch("component/Footers/footers2/templateLink.html");
    const templateLink = await templateFileLink.text();

    return { template, templateLink };
}

let SiteFooter = {};

// Fonction pour formater un lien de navigation
SiteFooter.formatLink = function(link, templateLink) {
    let html = templateLink;
    html = html.replace('{{href}}', link.href);
    html = html.replace('{{text}}', link.text);
    return html;
};

// Fonction pour formater la section site-footer
SiteFooter.format = function(r, templates) {
    let { template, templateLink } = templates;

    let html = template;

    let footerLinks = "";
    for (let link of r.footerLinks) {
        footerLinks += SiteFooter.formatLink(link, templateLink);
    }
    html = html.replace('{{footerLinks}}', footerLinks);

    html = html.replace('{{termsHref}}', r.termsHref);
    html = html.replace('{{privacyHref}}', r.privacyHref);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
SiteFooter.render = async function(where, what) {
    let element = document.querySelector(where);
    let html = "";

    // Charger les templates
    let templates = await loadTemplates();

    html = SiteFooter.format(what, templates);

    element.innerHTML = html;
};

export { SiteFooter };
