let switchBox =document.querySelector('#chk');

switchBox.onchange = function () {
    if (switchBox.checked === true) {
        document.body.style.background = "#fff";
    } else{
        document.body.style.background = "#33383f";
    }
}