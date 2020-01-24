// ЧИСЛА
var number = 3.3365;

console.log(number);
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// СТРОКИ


var string = 'моя строка';
console.log(string.length);
console.log(string.charAt(5));
console.log(string.toUpperCase());
console.log(string.substring(0,2));
console.log(string.substr(0,3));
console.log(string.slice(-2));

// МАССИВЫ


var array = [1,2,3,4];
// array[1] = 'привет';
console.log(array);
console.log(array.length);
console.log(array[array.length-2]);  //Вычисление последнего элемента массива

array.push(7);  //Добавляет элемент в конец
console.log(array);  
array.pop();    //Убирает элемент в конеца
console.log(array);
array.unshift(8); //Добавляет элемент в начало
console.log(array);
array.shift();   //Убирает элемент с начала
console.log(array);

console.log(array.join('Hello ')); //Превращает массив в строку и добавляет Hello

var stringG = 'Имя1, Имя2, Имя3, Имя4';
console.log(stringG.split(',')); // Превращает строку в мвссив

console.log(array.splice(0, 2, 'Вставка2')); // Вырезает из массива значения от 0 до 2 Вставленная строка- значение вместо вырезанного
console.log(array); // Остаток массива без от 0до 2

console.log(array.slice(0, 3)); // Копирует элементы от 0 до 3 не вырезая их
console.log(array); // Все элементы на месте

var array2 = [33,24,254,80];
console.log(array2.sort()); //Сортирует элементы массива но странно
console.log(array.reverse()); //Счет задом на перед

console.log(array.concat(array2));  // Собирает вместе два массива

var array3 = [1,2,3,4,5];
array3.forEach(function (item,i,arr){    // forEach для каждого выполняется переменная
    console.log(i + ' : ' + item + " массив: " + arr);
});



// ЦИКЛЫ



// Цикл for
var array4 = [1,15,253,39,456];

for (var i = 0; i < array4.length; i++) { // Объявляем переменную i, затем условие i меньше длинны строкиб и далее что делаем, i++ увеличиваем 
    console.log(array4[i]);
}

// Цикл while
var i = 0;
while (i < array4.length){  // пока выполняется условие
    console.log(array4[i]); // выводим значение i на экран
    i++;                    // увеличиваем i
}

// цикл do while
// отличие он сначал выполняет тело а потом проверяет условие
var i = 0;
do {                  //сначала выполняет действие 
    console.log(i);
    i++
} while (i <= 3);     // затем проверяет условие



// УСЛОВНЫЕ КОНСТРУКЦИИ



// = присваивание
// == не строгое значение или приравнивание
// === сторогое сравнение

var road = 'left';

if (road ==='left') {          // одинарная развилка
    console.log('Движимся налево')
} else {
    console.log('Куда ты едешь???!!!')
}



if (road ==='left') {          // многоуровневая развилка
    console.log('Движимся налево')
} else if (road ==='right') {         
    console.log('Движимся направо')
}
else {
    console.log('Куда ты едешь???!!!')
} 
                                        // тюрнарный оператор
var turn = (road ==='left') ? 'Движимся налево' : 'Куда ты едешь???!!!'; // если выбор из двух используем данный оператор
console.log(turn); 

                                     //двойные условия
var road = 'left';
var weather = 'sun';

if (road === 'left' && weather === 'sun') {  // знак && означает и, знак || означает или
    console.log('heappy');
} else {
    console.log('day is sucks');
}

                                       //Свитчи

switch (road) {
    case 'left':   //d случае переменной со значением left
        console.log('Движимся налево');
        break;   // обязательно пишем после каждого case
    case 'right':
        console.log('Движимся направо');
        break;
    default:  // если кейсы не выполняются 
        console.log('ЭЭЭй что делаешь');
        break;
}



// ОБЪЕКТЫ


var human = {};   // таким образом создаются объекты

human.name = 'Nickson';
human.age = 25;

console.log(human);
console.log(human.age); // можно обращаться к конкретному элементу
delete human.age;  // можно удалять элементы
console.log(human);

// обращение к элементу через переменную

var human = {
    name: 'nick',
    age: 25,
    weight: 75,
    favouriteColor: ['red','green'],
    adress: {
        city: 'odessa',
        street: 'lenina',
        house: 1
    }
};
var k = 'age';
console.log(human[k]);

// операция for in
for (var key in human) { // переменная ключевые слова
    console.log(key);
}

for (var key in human) { // переменная ключевые слова
    console.log(human[key]); // в [] кавычках - значение ключа
}

for (var key in human) {
    console.log(key + ':' + human[key]); //чтобы получить и ключ и значение ставим +
}


// ФУНКЦИИ


//функция- участок кода который можно 

function nameFunc() {
    console.log('ФУНКЦИЯ РАБОТАЕТ');
    var a = 5;
    console.log(a);

}
nameFunc(); // чтобы функция заработала нужно указать ИМЯ и ()


function nameFunc2() {
    var a = 5;

    return a;  // функция обязательно должна что-то возврвщвть
}

console.log(nameFunc2());


//  задание на Academy 

var ages = 15;
var namename = 'goga';
var subscribe = 'yes';

function allow() {
    console.log('Доступ на сайт разрешен')
}


if (ages >= '18' && subscribe === 'yes') {
    allow();
} else {
    console.log('Доступ запрещен');
}
