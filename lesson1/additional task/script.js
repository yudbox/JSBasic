let num = 33721;
num = String(num);

let fig = num.split("");


let one = parseInt(fig[0], 10);
let two = parseInt(fig[1], 10);
let three = parseInt(fig[2], 10);
let four = parseInt(fig[3], 10);
let five = parseInt(fig[4], 10);

let mult = one * two * three * four * five;

mult = mult**3;

console.log(mult);

