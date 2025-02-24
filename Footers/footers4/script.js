// Charger et lire les fichiers templates
const templateFile = await fetch("component/Footers/footers4/template.html");
const template = await templateFile.text();

const templateFileSection = await fetch("component/Footers/footers4/templateSection.html");
const templateSection = await templateFileSection.text();

const templateFileLink = await fetch("component/Footers/footers4/templateLink.html");
const templateLink = await templateFileLink.text();

const templateFileLanguage = await fetch("component/Footers/footers4/templateLanguage.html");
const templateLanguage = await templateFileLanguage.text();

let Footer = {};

// Fonction pour formater les liens de navigation du footer
Footer.formatOneLink = function(link) {
    let html = templateLink;
    html = html.replace("{{href}}", link.href);
    html = html.replace("{{text}}", link.text);
    return html;
};

// Fonction pour formater une section combinée
Footer.formatSection = function(heading, links) {
    let html = templateSection;
    html = html.replace("{{heading}}", heading);

    let sectionLinks = "";
    for (let link of links) {
        sectionLinks += Footer.formatOneLink(link);
    }
    html = html.replace("{{links}}", sectionLinks);

    return html;
};

// Fonction pour formater les options de langue
Footer.formatOneLanguage = function(language) {
    let html = templateLanguage;
    html = html.replace("{{text}}", language.text);
    return html;
};

// Fonction pour formater la section du footer
Footer.format = function(r) {
    let html = template;
    html = html.replace("{{footerTitle}}", r.footerTitle);
    html = html.replace("{{footerText}}", r.footerText);
    html = html.replace("{{termsLink}}", r.termsLink);
    html = html.replace("{{termsText}}", r.termsText);
    html = html.replace("{{privacyLink}}", r.privacyLink);
    html = html.replace("{{privacyText}}", r.privacyText);

    let productSection = Footer.formatSection(r.productSection.heading, r.productSection.links);
    html = html.replace("{{productSection}}", productSection);

    let workSection = Footer.formatSection(r.workSection.heading, r.workSection.links);
    html = html.replace("{{workSection}}", workSection);

    let stuffSection = Footer.formatSection(r.stuffSection.heading, r.stuffSection.links);
    html = html.replace("{{stuffSection}}", stuffSection);

    html = html.replace("{{flagIconSrc}}", r.flagIconSrc);
    html = html.replace("{{flagIconAlt}}", r.flagIconAlt);

    let languageOptions = "";
    for (let l of r.languageOptions) {
        languageOptions += Footer.formatOneLanguage(l);
    }
    html = html.replace("{{languageOptions}}", languageOptions);

    return html; // Make sure to return the formatted HTML
};

// Fonction pour rendre le template formaté dans le DOM
Footer.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Footer.format(what);
};

export { Footer };
