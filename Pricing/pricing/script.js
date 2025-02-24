// Charger et lire les fichiers templates
    const templateFile = await fetch("component/Pricing/pricing/template.html");
    const template = await templateFile.text();

    const templateFilePlan = await fetch("component/Pricing/pricing/templatePlan.html");
    const templatePlan = await templateFilePlan.text();

    const templateFileFeature = await fetch("component/Pricing/pricing/templateFeature.html");
    const templateFeature = await templateFileFeature.text();
let Pricing = {};

// Fonction pour formater les fonctionnalités du plan
Pricing.formatFeature = function(feature) {
    let html = templateFeature;
    html = html.replace('{{feature}}', feature);
    return html;
};

// Fonction pour formater un plan de la section pricing
Pricing.formatPlan = function(plan) {
    let html = templatePlan;
    html = html.replace('{{planClass}}', plan.planClass);
    html = html.replace('{{planTitle}}', plan.planTitle);
    html = html.replace('{{planSubtitle}}', plan.planSubtitle);
    html = html.replace('{{planPrice}}', plan.planPrice);
    html = html.replace('{{buttonText}}', plan.buttonText);

    let planFeatures = "";
    for (let feature of plan.planFeatures) {
        planFeatures += Pricing.formatFeature(feature);
    }
    html = html.replace('{{planFeatures}}', planFeatures);

    return html;
};

// Fonction pour formater la section pricing
Pricing.format = function(r) {

    let html = template;

    let plans = "";
    for (let plan of r.plans) {
        plans += Pricing.formatPlan(plan);
    }
    html = html.replace('{{plans}}', plans);

    html = html.replace('{{pricingTitle}}', r.pricingTitle);
    html = html.replace('{{pricingSubtitle}}', r.pricingSubtitle);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Pricing.render = async function(where, what) {
    let element = document.querySelector(where);

    element.innerHTML = Pricing.format(what);
};

export { Pricing };
