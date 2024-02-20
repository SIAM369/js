// Event Summary HTML.
// Option 1
function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status')
    handlerStatus.innerText = 'Handle by function attached on onClick attribute'
}

// Option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add event listener button.'
})

// Option 2: recap
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display')
    p.innerText = inputText;
    inputField.value = '';
})