// Charger et lire le fichier template.html
const templateFile = await fetch("component/Feature/feature2/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("component/Feature/feature2/templateDesc.html");
const templateDesc = await templateFile2.text();

let Feature = {};

// Fonction pour formater les liens de navigation du Feature
Feature.formatOneDesc = function (d) {
  let html = templateDesc;
  html = html.replace("{{title}}", d.title);
  html = html.replace("{{description}}", d.description);
  return html;
};

// Fonction pour formater la section du Feature
Feature.format = function (r) {
  let html = template;
  html = html.replace("{{pageTitle}}", r.pageTitle);
  html = html.replace("{{pageText}}", r.pageText);
  html = html.replace("{{pageImageSrc}}", r.pageImageSrc);
  html = html.replace("{{pageImageAlt}}", r.pageImageAlt);

  let listeFeature = "";
  for (let d of r.pageInfo) {
    listeFeature += Feature.formatOneDesc(d);
  }

  html = html.replace("{{pageInfo}}", listeFeature);
  return html;
};

// Fonction pour rendre le template formatté dans le DOM
Feature.render = function (where, what) {
  let element = document.querySelector(where);
  element.innerHTML = Feature.format(what);
};

export { Feature };
