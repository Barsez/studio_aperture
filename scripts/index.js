const headerBtn1 = document.querySelector('.navBtn1');
const headerBtn2 = document.querySelector('.navBtn2');
const headerBtn3 = document.querySelector('.navBtn3');
const headerBtn4 = document.querySelector('.navBtn4');
const navBtn = document.querySelector('.navButton');
const menu_opt = document.querySelector('.menu_opt');
const modal_list = document.querySelector('.menu_modal');

const menu_modal_li1 = document.querySelector('.menu_modal_li1');
const menu_modal_li2 = document.querySelector('.menu_modal_li2');
const menu_modal_li3 = document.querySelector('.menu_modal_li3');
const menu_modal_li4 = document.querySelector('.menu_modal_li4');

const main = document.querySelector('#main');
const what_we_do = document.querySelector('#what_we_do');
const gearcage = document.querySelector('#gearcage');
const contact= document.querySelector('#contact');



const footer_btn1= document.querySelector('.footer_btn1');
const footer_btn2= document.querySelector('.footer_btn2');
const footer_btn3= document.querySelector('.footer_btn3');
const footer_btn4= document.querySelector('.footer_btn4');
const footer_btn5= document.querySelector('.footer_btn5');


function btnScrollTo(from, to) {
    from.addEventListener('click', function() {
        to.scrollIntoView({behavior: 'smooth'});
    });
}
btnScrollTo(headerBtn1, main);
btnScrollTo(headerBtn2, what_we_do);
btnScrollTo(headerBtn3, gearcage);
btnScrollTo(headerBtn4, contact);
btnScrollTo(navBtn, main);

btnScrollTo(menu_modal_li1, main);
btnScrollTo(menu_modal_li2, what_we_do);
btnScrollTo(menu_modal_li3, gearcage);
btnScrollTo(menu_modal_li4, contact);

btnScrollTo(footer_btn1, main);
btnScrollTo(footer_btn2, what_we_do);
btnScrollTo(footer_btn3, what_we_do);
btnScrollTo(footer_btn4, what_we_do);
btnScrollTo(footer_btn5, what_we_do);


menu_opt.addEventListener('click', function() {
    // modal_list.style.display = 'flex'
    modal_list.classList.toggle('block')
})

const menu_lists = document.querySelectorAll('.menu_modal_list > li');

for(let el of menu_lists) {
    el.addEventListener('click', function() {
        modal_list.classList.remove('block')
    })
}