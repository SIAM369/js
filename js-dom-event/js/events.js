// Events HTML.
console.log('This is outside of HTML')
// option1
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}


// option2      IMPORTANT
{/* <button onclick="makeRed()">Make Red</button> */}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 4     IMPORTANT
const makePurpleButton = document.getElementById('make-purple')
makePurpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple'
}

// Option 5
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// option 6
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})

// option 7     Important
document.getElementById('make-gold').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold'
})