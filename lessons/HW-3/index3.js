
alert('Я могу посчитать среднее арифметическое из трех чисел!');
let a = prompt('Напиши первое число от 1 до 999' , '');
let b = prompt('Напиши первое число от 1 до 999' , '');
let c = prompt('Напиши первое число от 1 до 999' , '');
let sum = (+a + +b + +c)
let average = (sum / 3)
alert( `Среднее арифметическое ранее полученных чисел: ${average}` )