export default function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    let div = document.createElement('div');
    div.classList.add('about');

    let heading = document.createElement('h1');
    heading.textContent = 'About Us';

    let p1 = document.createElement('p');
    p1.textContent = 'Founded in 2025, that restaurant is all about bringing people together over good food.';

    let p2 = document.createElement('p');
    p2.textContent = 'Our chefs are passionate, our ingredients are fresh, and our goal is simple: make every guest feel at home.';

    let p3 = document.createElement('p');
    p3.textContent = 'We believe in honest food, warm hospitality, and great memories.';

    div.appendChild(heading);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    content.appendChild(div);
}