const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '6px';
    section.style.borderRadius = '15px';
    section.style.padding = '30px';
    section.style.backgroundColor = 'pink';
}

const placesContainer = document.getElementById('places');
// placesContainer.style.backgroundColor = 'yellow';
placesContainer.classList.add('text-align');