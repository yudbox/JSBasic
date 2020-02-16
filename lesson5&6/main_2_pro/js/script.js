let openShop = document.getElementById('open-btn');

let nameValue = document.querySelector('.main-info .name-value'); 
let budgetValue = document.querySelector('.main-info .budget-value'); 
let goodsValue = document.querySelector('.main-info .goods-value'); 
let itemsValue = document.querySelector('.main-info .items-value'); 
let employersValue = document.querySelector('.main-info .employers-value'); 
let discountValue = document.querySelector('.main-info .discount-value'); 
let isopenValue = document.querySelector('.main-info .isopen-value'); 
 

let goodsItems = document.querySelectorAll('.main-functions .goods-item');

let btnConfirm = document.querySelector('.main-functions button.goods-item-btn');
let btnBudget = document.querySelector('.main-functions button.count-budget-btn');
let btnHire = document.querySelector('.main-functions button.hire-employers-btn');

let goodsProd = document.querySelector('#items');
let timeToWork = document.querySelector('#time');
let dailyBudget = document.querySelector('#budget');


let wokerNames = document.querySelectorAll('input.hire-employers-item');
let money,
    price;

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    makeDiscont: function makeDiscont() {
        if (mainList.discount == true) {
            price = price * 0.8;
            console.log(price);
        } else {
            console.log(price);
        }
    },

}    

openShop.addEventListener('click', () => {
    money = prompt('Ваш бюджет', '');
    while (isNaN(money) || money == "" || money == null) {
        money = prompt('Ваш бюджет', '');

    }

    budgetValue.textContent = money;    
    nameValue.textContent = prompt('Введите название вашего магазина', '').toUpperCase();
});

btnConfirm.addEventListener('click', () => {
    for (let i = 0; i < goodsItems.length; i++) {
        let a = goodsItems[i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && a.length < 40) {
            console.log('Все верно');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        } else {
            i = i - 1;

        }
    }
});

goodsProd.addEventListener('change', () => {
        let items = goodsProd.value;

        if (isNaN(items) && items !='') {
            mainList.shopItems = items.split(', ');
            mainList.shopItems.sort();

            itemsValue.textContent = mainList.shopItems.sort();    

        }
});


timeToWork.addEventListener('change', () => {
    let time = timeToWork.value;
    if (time < 0) {
        console.log('Its imposible');
        mainList.open = false;
    } else if (time >= 8 && time < 20) {
        console.log('It is time to work now!');
        mainList.open = true;
    } else if (time < 24.000000001) {
        console.log('We are not working now.');
        mainList.open = false;
    } else {
        console.log('There is only 24 hours in the whole day!!!!');
        mainList.open = false;
    }

    if (mainList.open == true) {
        isopenValue.style.background = 'green';
    } else {
        isopenValue.style.background = 'red'; 
    }
});


btnBudget.addEventListener('click', () => {
    if (mainList.discount == true) {
        dailyBudget.value = money / 30 * 0.8;
    } else {
        dailyBudget.value = money / 30;
    }
    dailyBudget.value = money / 30;
});

btnHire.addEventListener('click', () => {
    for (i = 0; i < wokerNames.length; i++) {
        let emp = wokerNames[i].value;
        mainList.employers[i] = emp;
        employersValue.textContent += `${mainList.employers[i]}, `;
    }

});

function discont(){
    if (Number(money) >= 50000) {
   
        mainList.discount = true;
        discountValue.style.background = "green";
        discountValue.insertAdjacentHTML('afterbegin', '<p> Дисконтная система активирована, скидка 80%</p>');
    } else {
        mainList.discount = false;
        discountValue.style.background = "red";
    }
}

setTimeout(discont, 6000);




// for (item in mainList) {
//     console.log(`Наш магазин включает в себя: ${item}`);
    
// }