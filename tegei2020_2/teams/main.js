



emergence.init({ reset: false })


const obj = new Array(null, null, null);
for (var i = 0; i < 4; i++) {
    obj[i] = document.getElementById("text" + i);
    obj[i].classList.add('element');
    obj[i].setAttribute('data-emergence', 'hidden');
}


