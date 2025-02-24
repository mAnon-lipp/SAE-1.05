const templateFile = await fetch("component/Header/header/template.html");

const template = await templateFile.text();

let Header = {}; 


Header.format = function(r) {
    let html = template;
    html = html.replace('{{mainHeroTitle}}', r.mainHeroTitle);
    html = html.replace('{{mainHeroSubtitle}}', r.mainHeroSubtitle);
    html = html.replace('{{mainHeroDescription}}', r.mainHeroDescription);
    html = html.replace('{{mainHeroButton}}', r.mainHeroButton);
    html = html.replace('{{mainHeroImageSrc}}', r.mainHeroImageSrc);
    html = html.replace('{{mainHeroImageAlt}}', r.mainHeroImageAlt);

    return html;
}

Header.render = function( where, what ){
    let element = document.querySelector(where);
    element.innerHTML = Header.format(what);
}


export {Header};