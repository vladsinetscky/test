// if (2*3 == 8) {
//     console.log("Верно!")
// } else {
//     console.log("Неверно!")
// }

let num = 50;

if (num < 49) {
    console.log('Неверно!');
} else if (num > 100) {
    console.log('Много!');
} else {
    console.log('Верно!');
}

(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Все еще много!');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Не число!');
        break;
}
