// Charger et lire les fichiers templates
    const templateFile = await fetch("component/Content/content4/template.html");
    const template = await templateFile.text();

    const templateFileComparisonRow = await fetch("component/Content/content4/templateComparisonRow.html");
    const templateComparisonRow = await templateFileComparisonRow.text();

let Comparison = {};

// Fonction pour formater un élément de la table de comparaison
Comparison.formatRow = function(row) {
    let html = templateComparisonRow;
    html = html.replace('{{rowClass}}', row.rowClass);
    html = html.replace('{{featureName}}', row.featureName);
    html = html.replace('{{featureDescription}}', row.featureDescription);
    html = html.replace('{{featureFree}}', row.featureFree);
    html = html.replace('{{featurePro}}', row.featurePro);
    return html;
};

// Fonction pour formater la section comparison
Comparison.format = function(r) {

    let html = template;

    let comparisonRows = "";
    for (let row of r.comparisonRows) {
        comparisonRows += Comparison.formatRow(row);
    }
    html = html.replace('{{comparisonRows}}', comparisonRows);

    html = html.replace('{{comparisonTitle}}', r.comparisonTitle);

    return html;
};

// Fonction pour rendre le template formaté dans le DOM
Comparison.render = function(where, what) {
    let element = document.querySelector(where);

    element.innerHTML = Comparison.format(what);
};

export { Comparison };
