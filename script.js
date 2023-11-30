let pText = document.querySelectorAll('p');


/*pText.forEach((item) => {
    item.onclick = function () {
        alert(item.innerHTML);
    }
})*/

pText.forEach((element) => {
    
    element.ondblclick = function () {
        let span = document.createElement('span');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        span.append(checkbox);
        element.append(span);
        checkbox.checked = true;
    }
});

// Uy ishi : osha p ni ikki marta bosilsa alertga bu bosilgan dib chiqishi kere