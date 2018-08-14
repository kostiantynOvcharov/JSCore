document.getElementsByClassName('buttons-container')[0].addEventListener('click', displayNumber);

function displayNumber(event) {
    let container = document.getElementsByClassName('buttons-container')[0];
    let buttonValue = event.target != container ? event.target.innerHTML : "Misclick!";
    document.getElementsByClassName('output')[0].innerHTML = buttonValue;
    localStorage.setItem('value', buttonValue)
}

