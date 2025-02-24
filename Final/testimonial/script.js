// Charger et lire le fichier template.html
const templateFile = await fetch("Final/testimonial/template.html");
const template = await templateFile.text();

let Testimonial = {};

// Fonction pour formater la section de testimonial
Testimonial.format = function(r) {
    let html = template;
    html = html.replace('{{testimonialQuote}}', r.testimonialQuote);
    html = html.replace('{{testimonialAuthorImageSrc}}', r.testimonialAuthorImageSrc);
    html = html.replace('{{testimonialAuthorImageAlt}}', r.testimonialAuthorImageAlt);
    html = html.replace('{{testimonialAuthorName}}', r.testimonialAuthorName);
    html = html.replace('{{testimonialAuthorCompany}}', r.testimonialAuthorCompany);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Testimonial.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Testimonial.format(what);
};

export { Testimonial };
