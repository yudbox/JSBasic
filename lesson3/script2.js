let money,
    name, 
    time,
    price = 100; 

function start() {
    
    while (isNaN(money) || money == "" || money == null) {
        money = prompt ('Ваш бюджет');
    }

    name = prompt ('Введите название вашего магазина').toUpperCase();
    time = 18;
}

    // start();

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false
}

function chooseGoods() {
    for (let i = 0; i < 5; i++) {
        let a = prompt ('Какой тип товаров будем продавать?');
        
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 40) {
          console.log('Все верно');
          mainList.shopGoods[i] = a;
        } else {
          i = i - 1;
          confirm("Please make again.");
        }
      
        // ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 40) ?  mainList.shopGoods[i] = a : i = i - 1;  
      
       }
}

// chooseGoods();



function workTime(time) {
    if (time < 0) {
        console.log('Its imposible')
    } else if (time > 8 && time < 20) {
        console.log('It is time to work now!')
    } else if (time < 24.000000001) {
        console.log('We are not working now.')
    } else {
        console.log('There is only 24 hours in the whole day!!!!')
    }
}

    workTime(26);

function calculateDayBudget() {
    alert("Ежедневный буджет" + mainList.budget / 30);
}

    calculateDayBudget();

function makeDiscont() {
    if (mainList.discount == true) {
        price = price*0.8;
        console.log(price);
    } else {
        console.log(price);
    }
}

makeDiscont();

function employers() {
    for( i = 0; i < 4; i++ ) {
        let emp = prompt ('Укажите ваше имя?');
        mainList.employers[i] = emp;

    }
}

employers();

console.log(mainList);


