// Charger et lire les fichiers templates
    const templateFile = await fetch("component/Content/content3/template.html");
    const template = await templateFile.text();

    const templateFileStep = await fetch("component/Content/content3/templateStep.html");
    const templateStep = await templateFileStep.text();

    const templateFileStepLine = await fetch("component/Content/content3/templateStepLine.html");
    const templateStepLine = await templateFileStepLine.text();

    const templateFileSection = await fetch("component/Content/content3//templateSection.html");
    const templateSection = await templateFileSection.text();

    const templateFileSectionImage = await fetch("component/Content/content3/templateSectionImage.html");
    const templateSectionImage = await templateFileSectionImage.text();
let Process = {};

// Fonction pour formater un élément de section de process
Process.formatSection = function(section) {
    let html = templateSection;
    html = html.replace('{{sectionTitle}}', section.sectionTitle);
    html = html.replace('{{sectionDescription}}', section.sectionDescription);
    if (section.sectionImage) {
        let imageHtml = templateSectionImage;
        imageHtml = imageHtml.replace('{{imageSrc}}', section.sectionImage.imageSrc);
        imageHtml = imageHtml.replace('{{imageAlt}}', section.sectionImage.imageAlt);
        imageHtml = imageHtml.replace('{{imageText}}', section.sectionImage.imageText);
        html = html.replace('{{sectionImage}}', imageHtml);
    } else {
        html = html.replace('{{sectionImage}}', '');
    }
    return html;
};

// Fonction pour formater un élément de step de process
Process.formatStep = function(step) {
    let html = templateStep;
    html = html.replace('{{stepNumber}}', step.stepNumber);
    if (step.stepLine) {
        html = html.replace('{{stepLine}}', templateStepLine);
    } else {
        html = html.replace('{{stepLine}}', '');
    }
    return html;
};

// Fonction pour formater la section process
Process.format = function(r) {

    let html = template;

    let steps = "";
    for (let step of r.steps) {
        steps += Process.formatStep(step,);
    }
    html = html.replace('{{steps}}', steps);

    let sections = "";
    for (let section of r.sections) {
        sections += Process.formatSection(section);
    }
    html = html.replace('{{sections}}', sections);

    html = html.replace('{{processHeading}}', r.processHeading);
    html = html.replace('{{buttonText}}', r.buttonText);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Process.render = function(where, what) {
    let element = document.querySelector(where);

    element.innerHTML = Process.format(what);
};

export { Process };
