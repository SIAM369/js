console.log('Outside html')

const allLi = document.getElementsByTagName('li')
console.log(allLi)

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles)

const secondSection = document.getElementById('second-section');
console.log(secondSection)
secondSection.style.backgroundColor = 'yellow'
secondSection.style.color = 'blue'

