let money,
    name,
    time,
    price;

function start() {

    while (isNaN(money) || money == "" || money == null) {
        money = prompt('Ваш бюджет', '');
    }

    name = prompt('Введите название вашего магазина', '').toUpperCase();
    time = 18;
}

//start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
            let a = prompt('Какой тип товаров будем продавать?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 40) {
                console.log('Все верно');
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
                confirm("Please make again.");
            }
        }
    },
    chooseShopItems: function chooseShopItems() {
        for (let g = 0; g < 1; g++) {
            let items = prompt("Перечислите через запятую товары", "");
            if (typeof (items) === 'string' && items !== "" && items !== null) {
                let itemsList = items.split(",");
                let count = 0;
                for (let i = 0; i < itemsList.length; i++) {
                    let z = Number(itemsList[i])
                    if (isNaN(z)) {
                        count++;
                    }
                }
                if (count == itemsList.length) {
                    mainList.shopItems = items.split(",");
                    mainList.shopItems.push(prompt("Если вы что-то забыли, можете ввести еще товар", ""));
                    mainList.shopItems.sort();
                    mainList.shopItems.forEach((item, index) => {
                        alert(`У нас вы можете купить: ${index + 1} - ${item}`);
                        
                    });
                } else {
                    alert("Вы ввели не коректные данные, заполните поля еще раз");
                    g = g - 1;
                }
            } else {
                alert("Вы ввели не коректные данные, заполните поля еще раз");
                g = g - 1;
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Its imposible')
        } else if (time > 8 && time < 20) {
            console.log('It is time to work now!');
            mainList.open = true;
        } else if (time < 24.000000001) {
            console.log('We are not working now.');
        } else {
            console.log('There is only 24 hours in the whole day!!!!');
        }
    },
    calculateDayBudget: function calculateDayBudget() {
        alert("Ежедневный буджет" + mainList.budget / 30);
    },
    makeDiscont: function makeDiscont() {
        if (mainList.discount == true) {
            price = price * 0.8;
            console.log(price);
        } else {
            console.log(price);
        }
    },
    hireJob: function hireJob() {
        for (i = 0; i < 4; i++) {
            let emp = prompt('Укажите ваше имя?', '');
            mainList.employers[i] = emp;

        }
    }

}

for (item in mainList) {
    console.log(`Наш магазин включает в себя: ${item}`);
    
}



// METHOD FOR SORTING NUMBERS

// let first = ['1', '2', '3', '15', '4', '3.7', 38];

// function sortNumbers(a, b) {
//     return a - b;
// }

// first = first.sort(sortNumbers);

// console.log(first);
// console.log(typeof(first));


