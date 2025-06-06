import { pageLoad } from "./page-load";
import { home } from "./home";
import { menu } from "./menu"
import { about } from "./about"

function clearContent() {
    document.querySelector("#content").textContent = "";
}

document.querySelector("#btn_home").addEventListener('click', btn => {
    clearContent();
    home();
});
document.querySelector("#btn_menu").addEventListener('click', btn => {
    clearContent();
    menu();
});
document.querySelector("#btn_about").addEventListener('click', btn => {
    clearContent();
    about();
});

pageLoad();