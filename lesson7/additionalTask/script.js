function Puser(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new Puser("Вася");


  // console.log(user);

  //rabbit.__proto__ = animal;
 // __proto__: animal;
 //pockets → bed → table → head


  let head = {
    glasses: 1
  };
  

  let table = {
    pen: 3,
  __proto__: head
  };


  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };


  let pockets = {
    money: 2000,
  __proto__: bed
  };


  // console.log(head.pen)

function Car(name) {
  this.name = name;
  this.power = 200;
  this.mechanik = true;
  this.sayTrade = function() {
    return `Моя марка ${name}`;
  }
}

let reno = new Car('reno');
let toyota = new Car('toyota');
let mers = {
  name: 'mers',
  power: 200,
  mechanik: true,
  sayTrade: function() {
    return `Моя марка ${name}`
  }
}



//--------------------  prototype and proto



let man = '22';
let man2 = "333";

// console.log(man.__proto__ === man2.__proto__);



// console.dir(Object.prototype);
// console.dir(Promise.prototype);
// console.dir(Function.prototype);
// console.dir(Boolean.prototype);
// console.dir(Number.prototype);
// console.dir('hello'.__proto__);
// console.dir([].__proto__);
// console.dir(Puser.prototype);
// Puser.prototype.sayHi = function() {
//   console.log("Hi");
// }

// console.log(Puser.prototype);

// let head1 = {
//   glasses: 1,
//   ears: 2,
//   face: 1
// };

// let table1 = Object.create(head1, {pen: {
//   value: 3
// }})

// let bed1 = {
//   sheet: 1,
//   pillow: 2,
// };



// console.log(Object.getPrototypeOf(table1));
// console.log(Object.setPrototypeOf(table1, bed1));


// let Obj = function(name) {
//   this.name = name;
// };



// let obj2 = new Obj('Вася');

// Obj.prototype.sayHi = function () {
//   console.log('Hi')
// } 
// obj2.sayHi = function() {
//   console.log('Hello')
// }
// console.log(obj2.constructor === Obj)



// -------------------- Классы Class

// class Task {
//   constructor(title = Task.getDefaultTitle()) {
//     this.title = title;
//     this._done = false;
//     Task.count += 1;
//   }

//   get done() {
//     return console.log(`Статус задачи ${this._done}`);
//   }

//   set done(value) {
//       this._done = value;
//       console.log(`Статус задачи ${this._done}`);

//   }
//   complete() {
//     this.done = true;
    
//   }

//   static getDefaultTitle() {
//     return "Задача";
//   }
// }

// Task.count = 0;

// let task1 = new Task('Попить');


//--------------- Наследование в Классах


// class Task {
//   constructor(title) {
//     this.title = title;
//     this.done = false;
//   }

//   complete() {
//     this.done = true;
//   }
// }


// class Subtask extends Task {
//   constructor(title, parent) {
//     super(title);
//     this.parent = parent;
//     this.clean = "Yes";
//   }

//   complete() {
//     super.complete();
//     console.log(`Подзадача "${this.title}" выполнена`)
//   }
// }

// let bigTask = new Task('React');
// let smallTask = new Subtask('JS', bigTask);

// console.log(bigTask);
// console.log(smallTask);

// bigTask.complete();
// smallTask.complete();

// console.log(bigTask);
// console.log(smallTask);