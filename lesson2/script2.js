let money = prompt ('Ваш бюджет');
let name = prompt ('Введите название вашего магазина');

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false
}

for (let i = 0; i < 5; i++) {
  let a = prompt ('Какой тип товаров будем продавать?');
  
  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 40) {
    console.log('Все верно');
    mainList.shopGoods[i] = a;
  } else {
    i = i - 1;
    confirm("Please make again.");
  }
}



alert(mainList.budget / 30);

console.log(mainList);