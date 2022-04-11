//работа бургер меню

let btnMenu = document.querySelector('.menu-button');
let menu = document.querySelector('.burger-menu');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let menuImage = document.querySelector('.menu__image');
let menuLine = document.querySelector('.menu-button__line');
let menuLinks = document.querySelectorAll('.menu__link');

btnMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    main.classList.toggle('active');
    footer.classList.toggle('active');
    menuImage.classList.toggle('active');
    menuLine.classList.toggle('active');
})

for (link of menuLinks) {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
        main.classList.remove('active');
        footer.classList.remove('active');
        menuImage.classList.remove('active');
        menuLine.classList.remove('active');
    });
}

//раскрытие текста

let btnText = document.querySelector('.introduse__decor');
let textBlock = document.querySelector('.introduce__cover');

btnText.addEventListener('click', function () {
    btnText.classList.toggle('active');
    textBlock.classList.toggle('active');
})

//работа форм связи

let btnFormHeader = document.querySelector('.main-screen__link');
let btnFormBlokc = document.querySelector('.statistics__link');
let invivisibleForm = document.querySelector('.invisible-form');
let closeFormBtn = document.querySelector('.button');
let sendFormBtn = document.querySelector('.invisible-form__button');
let inputs = document.querySelectorAll('.invisible-form__input');

btnFormHeader.addEventListener('click', showForm);
btnFormBlokc.addEventListener('click', showForm);

function showForm() {
    invivisibleForm.classList.add('active');
}

closeFormBtn.addEventListener('click', function () {
    invivisibleForm.classList.remove('active');
});
sendFormBtn.addEventListener('click', closeForm);
function closeForm() {
    for (input of inputs) {
        input.value = '';
    }
    setTimeout(function () {
        invivisibleForm.classList.remove('active');
    }, 1000);
}

//работа анимации заголовков

AOS.init();

//расписание

let btnTimetanble = document.querySelector('.timetable__link');
let card = document.querySelector('.four');

btnTimetanble.addEventListener('click', function(){
    card.classList.toggle('active');
    btnTimetanble.classList.toggle('active');
    if(btnTimetanble.classList.contains('active')) {
        btnTimetanble.innerHTML = 'Свернуть';
    } else {
        btnTimetanble.innerHTML = 'Всё расписание';
    }
})