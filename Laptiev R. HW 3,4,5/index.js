
//           HW - 3. Среднее арифметическое из трех чисел.

// alert('Я могу посчитать среднее арифметическое из трех чисел!');
// let a = prompt('Напиши первое число от 1 до 999' , '');
// let b = prompt('Напиши первое число от 1 до 999' , '');
// let c = prompt('Напиши первое число от 1 до 999' , '');
// let sum = (+a + +b + +c)
// let average = (sum / 3)
// alert( `Среднее арифметическое ранее полученных чисел: ${average}` )


//           HW - 4. Математические операции
//                       Вариант №1

alert('Давай немного посчитаем!');
let x = Number(prompt('Напиши первое число от 1 до 999' , ''));
let y = Number(prompt('Напиши первое число от 1 до 999' , ''));
let sum = (x + y)
let minus = (x - y)
let multiplication = (x * y)
let division = (x / y)
alert(`Ты ввёл ${x} и ${y}\r\n${x}+${y}=${sum}\r\n${x}-${y}=${minus}\r\n${x}*${y}=${multiplication}\r\n${x}/${y}=${division}`)

//                       Вариант №2

// alert('Давай немного посчитаем!');
// let x = prompt('Напиши первое число от 1 до 999' , '');
// let y = prompt('Напиши первое число от 1 до 999' , '');
// let sum = (+x + +y)
// let minus = (x - y)
// let multiplication = (x * y)
// let division = (x / y)
// alert(`Ты ввёл ${x} и ${y}\r\n${x}+${y}=${sum}\r\n${x}-${y}=${minus}\r\n${x}*${y}=${multiplication}\r\n${x}/${y}=${division}`)

//           HW - 5. Перевод часов в секунды

// alert('Я могу посчитать сколько в часах секунд!');
// let hour = prompt('Напиши любое количество часов, а я переведу их секунды!', '');
// let sec = (hour*3600);
// if ( !parseInt(hour) ) {
//     alert ('Ну и ладно, как хочешь!');
//     } else {
//     alert(`Ты написал ${hour} часов и это будет - ${sec} секунд.`);
//     }