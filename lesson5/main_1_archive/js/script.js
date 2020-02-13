let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');


 menu.append(menuItems[1]);
 menu.append(menuItems[3]);
 menu.insertAdjacentHTML('beforeend', '<li class="menu-item">Пятый пункт</li>');

 document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

let title = document.getElementById('title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';

let advert = document.querySelector('.adv');
advert.remove();


let myRel = prompt('Ваше отношение к технике Apple', '');
let answer = document.getElementById('prompt');
answer.innerHTML = myRel;


//console.log(title);