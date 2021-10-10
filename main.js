const powerButton = document.getElementById('power-button'),
      remoteLight = document.getElementById('remote__light')

if(powerButton) {
    powerButton.addEventListener('click', () => {
        remoteLight.classList.toggle('power-on')
    })
}

// $(function() {
//     setTimeout(function() {
//          $(".power-on").fadeOut(1500);
//     }, 5000)
// })

const tempUpButton = document.getElementById('temp-up-button'),
      tempDownButton = document.getElementById('temp-down-button')

function incrementValue() {
    let value = parseInt(document.getElementById('degrees').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('degrees').value = value + ' ' + String.fromCharCode(176) + 'C';
}

if(tempUpButton) {
    tempUpButton.addEventListener('click', incrementValue)
}

function decreaseValue() {
    let value = parseInt(document.getElementById('degrees').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('degrees').value = value + ' ' + String.fromCharCode(176) + 'C';
}

if(tempDownButton) {
    tempDownButton.addEventListener('click', decreaseValue)
}