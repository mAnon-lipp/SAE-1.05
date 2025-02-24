// Charger et lire les fichiers templates
    const templateFile = await fetch("component/Content/content6/template.html");
    const template = await templateFile.text();

    const templateFileText = await fetch("component/Content/content6/templateText.html");
    const templateText = await templateFileText.text();

    const templateFileVideo = await fetch("component/Content/content6/templateVideo.html");
    const templateVideo = await templateFileVideo.text();

let MediaSection = {};

// Fonction pour formater le texte de la section media
MediaSection.formatText = function(data) {
    let html = templateText;
    html = html.replace('{{mediaTitle}}', data.mediaTitle);
    html = html.replace('{{mediaDescription}}', data.mediaDescription);
    html = html.replace('{{buttonText}}', data.buttonText);
    return html;
};

// Fonction pour formater la vidéo de la section media
MediaSection.formatVideo = function(data) {
    let html = templateVideo;
    html = html.replace('{{videoSrc}}', data.videoSrc);
    html = html.replace('{{videoTitle}}', data.videoTitle);
    return html;
};

// Fonction pour formater la section media
MediaSection.format = function(data) {
    let html = template;

    let mediaText = MediaSection.formatText(data);
    html = html.replace('{{mediaText}}', mediaText);

    let mediaVideo = MediaSection.formatVideo(data);
    html = html.replace('{{mediaVideo}}', mediaVideo);

    return html;
};

// Fonction pour rendre le template formatté dans le DOM
MediaSection.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML =  MediaSection.format(what);
};

export { MediaSection };
