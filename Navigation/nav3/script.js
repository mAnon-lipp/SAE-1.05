const templateFile = await fetch("component/Navigation/nav3/template.html");

const template = await templateFile.text();

let Nav3 = {}; 


Nav3.format = function(r) {
    let html = template;
    html = html.replace('{{brandName}}', r.brandName);
    html = html.replace('{{navTour}}', r.navTour);
    html = html.replace('{{navAbout}}', r.navAbout);
    html = html.replace('{{navBuy}}', r.navBuy);

    return html;
}

Nav3.render = function( where, what ){
    let element = document.querySelector(where);
    element.innerHTML = Nav3.format(what);
}


export {Nav3};