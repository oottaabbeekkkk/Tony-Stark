let knopka = document.querySelector('.btn');
let rasm = document.querySelector('.pic1');
let rasm2 = document.querySelector('.pic2');

knopka.addEventListener('click', () => {
    if(rasm.classList.contains('new')){
        rasm.classList.remove('new')
    } else {
        rasm.classList.add('new')
    }
})


knopka.addEventListener('click', () => {
    if(rasm2.classList.contains('new2')){
        rasm2.classList.remove('new2')
    } else {
        rasm2.classList.add('new2')
    }
})