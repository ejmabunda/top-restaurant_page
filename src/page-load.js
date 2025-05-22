import content from './content/homepage.json';

export function pageLoad() {
    let h1 = document.createElement('h1');
    h1.textContent = content.title;
    let h2 = document.createElement('h2');
    h2.textContent = content.subtitle;
    let p = document.createElement('p');
    p.textContent = content.description;
    document.querySelector('#content').append(h1, h2, p);
    document.querySelector('body').style.backgroundImage = "url('./src/images/homepage.jpg')";
}
