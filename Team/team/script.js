// Charger et lire le fichier template.html
const templateFile = await fetch("component/Team/team/template.html");
const template = await templateFile.text();

// Charger et lire le fichier templateTeam.html
const templateFile2 = await fetch("component/Team/team/templateTeam.html");
const templateTeam = await templateFile2.text();

let Team = {};

// Fonction pour formater un membre de l'équipe
Team.formatOneMember = function(member) {
    let html = templateTeam;
    html = html.replace('{{imageSrc}}', member.photo);
    html = html.replace('{{imageAlt}}', member.alt);
    html = html.replace('{{name}}', member.name);
    html = html.replace('{{role}}', member.role);
    return html;
};

// Fonction pour formater la section de l'équipe
Team.format = function(r) {

    let html = template;
    html = html.replace('{{teamSectionTitle}}', r.info.title || '');
    html = html.replace('{{teamTitle}}', r.info.subtitle || '');
    html = html.replace('{{teamDescription}}', r.info.description || '');

    let listeTeam = '';
    for (let member of r.members) {
        listeTeam += Team.formatOneMember(member);
    }

    html = html.replace('{{teamMembers}}', listeTeam);
    return html;
};

// Fonction pour rendre le template formatté dans le DOM
Team.render = function(where, what) {
    let element = document.querySelector(where);
    element.innerHTML = Team.format(what);
};

export { Team };