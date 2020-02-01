let str     = "урок-3-был слишком легким",
    string  = ""
for (let i = 0; i < 25; i++) {
    
    if (i == 0) {

        string += str[i].toUpperCase();
    } else {
        string += str[i];
    }
}
console.log(string);
let str2 = "";
for (let i = 0; i < 25; i++) {
    
    if (string[i] == "-") {
        
        str2 += " ";
    } else {
        str2 += string[i];
    }
}


// let h = "How are you"
// console.log(h.indexOf('you'));
// console.log(h.includes('ho '));
// console.log(h.startsWith('How '));
// console.log(h.endsWith('u'));


// console.log(h.slice(-5));
// console.log(h.substring(1, 6));
// console.log(h.substr(2, 7));

console.log(str2);
let lightIndex = str2.indexOf('легким');
let tooIndex = str2.indexOf('слишком')

let str3 = str2.substring(lightIndex, str2.length);
str3 = "Это было" + " " + str2.substr(tooIndex, 7) + " " + str3.slice(0, str3.length - 2) + "о";
console.log(str3);