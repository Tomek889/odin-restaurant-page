export default function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    let div = document.createElement('div');
    div.classList.add('menu');

    let heading = document.createElement('h1');
    heading.textContent = 'Take a look at our mouth-watering selection of dishes.';

    let starters = document.createElement('h2');
    starters.textContent = 'Starters';
    let ul1 = document.createElement('ul');
    let li11 = document.createElement('li');
    li11.textContent = 'Garlic Bread - Crispy and flavorful';
    let li12 = document.createElement('li');
    li12.textContent = 'Soup of the Day - Ask your server!';
    ul1.appendChild(li11);
    ul1.appendChild(li12);

    let mainCourses = document.createElement('h2');
    mainCourses.textContent = 'Main Courses';
    let ul2 = document.createElement('ul');
    let li21 = document.createElement('li');
    li21.textContent = 'Grilled Chicken with Veggies - A healthy favorite';
    let li22 = document.createElement('li');
    li22.textContent = 'Classic Cheeseburger - Served with fries';
    ul2.appendChild(li21);
    ul2.appendChild(li22);

    let desserts = document.createElement('h2');
    desserts.textContent = 'Desserts';
    let ul3 = document.createElement('ul');
    let li31 = document.createElement('li');
    li31.textContent = 'Chocolate Lava Cake - Rich and gooey';
    let li32 = document.createElement('li');
    li32.textContent = 'Ice Cream - Choose from vanilla, chocolate, or strawberry';
    ul3.appendChild(li31);
    ul3.appendChild(li32);

    div.appendChild(heading);
    div.appendChild(starters);
    div.appendChild(ul1);
    div.appendChild(mainCourses);
    div.appendChild(ul2);
    div.appendChild(desserts);
    div.appendChild(ul3);

    content.appendChild(div);
}