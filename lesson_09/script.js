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

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'rga'],
//     a = arr.join(', ');

// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'rga'],
//     a = arr.sort();

// console.log(arr);

let arr = [1, 15, 4],
    a = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);
