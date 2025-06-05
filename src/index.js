import { pageLoad } from "./page-load";
import { home } from "./home";
import { menu } from "./menu"
import { about } from "./about"

document.querySelector("#btn_home").addEventListener('click', btn => {
    home();
});
document.querySelector("#btn_menu").addEventListener('click', btn => {
    menu();
});
document.querySelector("#btn_about").addEventListener('click', btn => {
    about();
});

pageLoad();