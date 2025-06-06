import content from "./content/menu.json"

export function menu() {
    for (let i = 0; i < content.sections.length; i++) {
        let section = content.sections[i];
        let category = document.createElement("section");
        let title = document.createElement("h3");
        title.textContent = section.title;
        category.append(title);

        let items = section.items;
        let div = document.createElement("div");
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            let name = document.createElement("h4");
            name.textContent = item.name;

            let description = document.createElement("p");
            description.textContent = item.description;

            let price = document.createElement("span");
            price.textContent = item.price;

            let item_div = document.createElement("div");
            item_div.append(name, description, price);

            div.append(item_div);
        }
        category.append(div);
        document.querySelector("#content").append(category);
    }
}