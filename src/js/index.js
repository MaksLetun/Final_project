let hiddenTxt_1 = document.querySelector('.hidden_txt ')
let btn_1 = document.querySelector('.svg_btn_expand')
let txt_1 = document.querySelector('.btn_text')
let icn_1 = document.querySelector('.expand_icon')

btn_1.addEventListener('click', function () {
  if (txt_1.textContent === 'Читать далее') {
    hiddenTxt_1.classList.remove('hidden_txt')
    txt_1.textContent = 'Скрыть текст'
    icn_1.classList.add('rotate')
  } else {
    hiddenTxt_1.classList.add('hidden_txt')
    txt_1.textContent = 'Читать далее'
    icn_1.classList.remove('rotate')
  }
})

let cardList_2 = document.querySelector('.card-list')
let hideButton_2 = document.querySelector('.action__button')
let textSpan_2 = document.querySelector('.action__text')
let icon_2 = document.querySelector('.action__icon')

hideButton_2.addEventListener('click', function () {
  if (textSpan_2.textContent === 'Показать все') {
    cardList_2.classList.remove('visible')
    textSpan_2.textContent = 'Скрыть'
    icon_2.classList.add('rotate')
  } else {
    cardList_2.classList.add('visible')
    textSpan_2.textContent = 'Показать все'
    icon_2.classList.remove('rotate')
  }
})

let cardList_3 = document.querySelector('.card-list_modul_3')
let hideButton_3 = document.querySelector('.action__button_modul_3')
let textSpan_3 = document.querySelector('.action__text_modul_3')
let icon_3 = document.querySelector('.action__icon_modul_3')

hideButton_3.addEventListener('click', function () {
  if (textSpan_3.textContent === 'Показать все') {
    cardList_3.classList.add('visible_3')
    textSpan_3.textContent = 'Скрыть'
    icon_3.classList.add('rotate')
  } else {
    cardList_3.classList.remove('visible_3')
    textSpan_3.textContent = 'Показать все'
    icon_3.classList.remove('rotate')
  }
})

let burgerButton = document.querySelector('.svg_btn_burger')
let navContainer = document.querySelector('.nav_container')
let CloseBurgerButton = document.querySelector('.nav_btn_close')
let mainContent = document.querySelector('.main_content_site')

burgerButton.addEventListener('click', function () {
  navContainer.classList.toggle('active')
  mainContent.classList.add('blurred')
})

CloseBurgerButton.addEventListener('click', function () {
  navContainer.classList.remove('active')
  mainContent.classList.remove('blurred')
})

const swiper = new Swiper('.swiper', {
  spaceBetween: -9,
  slidesPerView: 'auto',
  speed: 1000,
  loop: false,
  allowTouchMove: true,
  autoHeight: false,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})
