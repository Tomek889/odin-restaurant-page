export default function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    let div = document.createElement('div');
    div.classList.add('menu');

    let heading = document.createElement('h1');
    heading.textContent = 'Take a look at our mouth-watering selection of dishes.';

    div.appendChild(heading);

    content.appendChild(div);
}