// Charger et lire le fichier template.html
const templateFile = await fetch("component/Ecommerce/ecommerce1/template.html");
const template = await templateFile.text();

let Ecommerce = {};

// Fonction pour formater la section ecommerce
Ecommerce.format = function(r) {
    let html = template;
    html = html.replace('{{ecommerceImageSrc}}', r.ecommerceImageSrc);
    html = html.replace('{{ecommerceImageAlt}}', r.ecommerceImageAlt);
    html = html.replace('{{ecommerceBrand}}', r.ecommerceBrand);
    html = html.replace('{{ecommercePromo}}', r.ecommercePromo);
    html = html.replace('{{ecommerceDescription}}', r.ecommerceDescription);
    html = html.replace('{{ecommercePrice}}', r.ecommercePrice);
    html = html.replace('{{ecommerceOriginalPrice}}', r.ecommerceOriginalPrice);
    html = html.replace('{{buyNowText}}', r.buyNowText);
    html = html.replace('{{viewMoreText}}', r.viewMoreText);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Ecommerce.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Ecommerce.format(what);
};

export { Ecommerce };
