import content from "./content/about.json"

export function about() {
    let h1 = document.createElement("h1");
    h1.textContent = content.title;

    let h2 = document.createElement("h2");
    h2.textContent = content.subtitle;

    let p = document.createElement("p");
    p.textContent = content.description;

    let team = document.createElement("div");
    content.team.forEach((data, index) => {
        let person = document.createElement("div");

        let name = document.createElement("p");
        name.textContent = data.name;

        let role = document.createElement("p");
        role.textContent = data.role;

        let bio = document.createElement("p");
        bio.textContent = data.bio;

        person.append(name, role, bio);
        team.append(person);
    });

    let heroImage = document.createElement("img");
    heroImage.src = content.img;
    document.querySelector("#content").append(h1, heroImage, h2, p, team);
}