export default function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    let div = document.createElement('div');
    div.classList.add('home');

    let heading = document.createElement('h1');
    heading.textContent = 'Welcome to our restaurant!';

    let p1 = document.createElement('p');
    p1.textContent = 'Experience delicious food made with love and the freshest ingredients. Whether you\'re here for a cozy dinner or a quick bite, we\'re excited to serve you.';

    let p2 = document.createElement('p');
    p2.textContent = 'Open every day from 12:00 PM to 10:00 PM - come hungry!';

    div.appendChild(heading);
    div.appendChild(p1);
    div.appendChild(p2);
    content.appendChild(div);
}