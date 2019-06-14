/*
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;
console.log(options);


//Метод for in;
for (let key in options) {
    console.log("свойство " + key + " имеете значение " + options[key]);
}

console.log(Object.keys(options).length);


let arr = [1, 2, 3, 4, 5];
arr.pop(); //удаляет последний элемент массива
arr.push('5'); //добавляет последний элемент массива
arr.shift(); //удаляет первый элемент массива
arr.unshift('1'); //добавляет первый элемент массива
console.log(arr);

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr);


//метод forEach;
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, i, mass) {
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});
console.log(arr);



let mass = [1, 3, 4, 6, 7];

for (let key in mass) { //при помощи for in мы получаем ключи элементов массива
    console.log(key);
}

let mass = [1, 3, 4, 6, 7];

for (let key of mass) { //при помощи for of мы получаем значения массива
    console.log(key);
}

*/

/*
let ans = prompt('', ''),
    arr = [];

arr = ans.split(',');
console.log(arr);

*/

/*
let arr = ["aasw", 'wewqw', 'dd', 'sdas'],
    i = arr.join(', ');

console.log(arr);
console.log(i);
*/


//сортировка по алфавиту
let arr = ["aasw", 'wewqw', 'dd', 'sdas'],
    i = arr.sort();

console.log(arr);

let arr = [1, 15, 4, 3],
    i = arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}

console.log(arr);