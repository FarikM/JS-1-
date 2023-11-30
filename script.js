let pText = document.querySelectorAll('p');

pText.forEach((element) => {
    element.onclick = function () {
        const span = document.createElement('span');
        const submitBTN = document.createElement('input');
        span.append(submitBTN);
        submitBTN.type = 'checkbox'
        element.append(span);
        if (!(submitBTN.checked = true)) {
            submitBTN.checked = true;
        }
    }

    element.ondblclick = function () {
       alert(`${element.innerText} uje bosilgan!`);
    }
});

// Uy ishi : osha p ni ikki marta bosilsa alertga bu bosilgan dib chiqishi kere