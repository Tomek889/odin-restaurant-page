export default function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    let div = document.createElement('div');
    div.classList.add('menu');

    content.appendChild(div);
}