window.onload = function() {
    let storedValue = localStorage.getItem('value');

    if(storedValue) {
        document.getElementsByClassName('output')[0].innerHTML = storedValue;
    }
}