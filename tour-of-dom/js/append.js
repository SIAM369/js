const placesList = document.getElementById('places-list')
const li = document.createElement('li');
li.innerText = 'Shundarban'
placesList.appendChild(li)


const mainContainer = document.getElementById('main-content');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list: ';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li')
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'kabab';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'borhani'
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


const sectionDress = document.createElement('section');
sectionDress.innerHTML =   `
<h1>My dress section: </h1>
<ul>
    <li>Lungi</li>
    <li>Shirt</li>
    <li>Pant</li>
</ul>
`
mainContainer.appendChild(sectionDress);