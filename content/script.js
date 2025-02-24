const templateFile = await fetch("Final/content/template.html");

const template = await templateFile.text();

let Content = {}; 


Content.format = function(r) {
    let html = template;
    html = html.replace('{{descriptionText}}', r.descriptionText);

    return html;
}

Content.render = function( where, what ){
    let element = document.querySelector(where);
    element.innerHTML = Content.format(what);
}


export {Content};