// 1 часть. 

// function stepValue() {
//     for (let n = 20; n < 30.5; n += 0.5) {
//          console.log(n);
//     }
// }
    
// 2 часть.
    
function dollarExchange() {
    let dollar = 27;
    for ( let n = 10; n <= 100; n += 10) {
        console.log(`${n} долларов - ${dollar*n} гривен.`);
    }
}
    
// 3 часть.
    
// function squareNumbers() {
//     let n = 235
//     for ( let value = 1; value**2 <= n; value++) {
//         console.log(value);
//     }
// }
    
// 4 часть. (тут приведена самая элементарная проверка не лишенная косяков и пробелов, 
//           для правильного нахождения простого числа нужно пользоваться Решетом Эратосфена,
//           но я пока не смогу её сам написать, там нужен другой уровень пользования яыком js)
    
// function primeNumber(value) {
//     if (value < 2) {
//         return false;
//     }  
//     for (let n = 0; n < value; n++) {
//         if (value % n === 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
    
// 5 часть. (тут я не вписывал проверки для отрицательных чисел, но они нужны только для четных степеней)
    
// function powerOfNumber(value){   
//     let value = prompt('Введи число')
//     let n = (value**(1/2));
//     let j = (value**(1/3));
//     if (value % n === 0) {
//         alert(`ты ввел число - ${value} его можно получить путем возведения в квадрат числа ${n}`);
//         return true;
//     } else if (value % j % j === 0){
//         alert(`ты ввел число - ${value} его можно получить путем возведения в третью степень числа ${j}`);
//         return true;
//     } else {
//         alert(`это число - ${value} нельзя получить возведением другого целого числа в степень.`);
//         return false;
//     }
// }   
    
// stepValue();
dollarExchange();
// squareNumbers();
// primeNumber();
// powerOfNumber();