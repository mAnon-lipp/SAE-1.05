// Charger et lire le fichier template.html
const templateFile = await fetch("component/Testimonial/testimonial/template.html");
const template = await templateFile.text();

let Testimonial = {};

// Fonction pour formater la section testimonial
Testimonial.format = function(r) {
    let html = template;
    html = html.replace('{{testimonialQuote}}', r.testimonialQuote);
    html = html.replace('{{authorImageSrc}}', r.authorImageSrc);
    html = html.replace('{{authorImageAlt}}', r.authorImageAlt);
    html = html.replace('{{authorName}}', r.authorName);
    html = html.replace('{{authorCompany}}', r.authorCompany);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Testimonial.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Testimonial.format(what);
};

export { Testimonial };
