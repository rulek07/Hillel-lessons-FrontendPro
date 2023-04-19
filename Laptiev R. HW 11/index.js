//     Вариант №1.

function sum() {
    let count = 0;
  
    return function(num) {
        return count += num;
    };
}
  
const counter = sum();
  
console.log(counter(3));
console.log(counter(5));
console.log(counter(20));

//     Вариант №2.

// let count = 0;

// function sum(num){
//   return count += num
// }

// console.log(sum(3));
// console.log(sum(5));
// console.log(sum(20));