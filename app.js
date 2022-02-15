document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const pin = document.getElementById('generate-pin');
    // pin.value = Math.round(Math.random() * 10000)
    pin.value = Math.round(1000 + Math.random() * 9000);
})

document.getElementById('keypad').addEventListener('click', function (event) {
    const numberInput = document.getElementById('number-input');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = "";
        }
        else {
            console.log(number)
        }
    }
    else {
        const previousNumberInput = numberInput.value;
        numberInput.value = previousNumberInput + number;
    }

})




function getNotify() {
    const pin = document.getElementById('generate-pin').value;
    const pintyp = document.getElementById('number-input').value;

    const pinSuccess = document.getElementById('pin-matched');
    const pinFail = document.getElementById('pin-error');
    if (pin == pintyp) {
        pinSuccess.style.display = "block"
        pinFail.style.display = "none"
        console.log('match')

    }
    else {
        pinSuccess.style.display = "none"
        pinFail.style.display = "block"
    }
}