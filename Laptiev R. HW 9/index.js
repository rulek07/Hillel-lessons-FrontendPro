//   Вариант №1:

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, number) {
    const indexElement = arr.indexOf(number);
    arr.splice(indexElement, 1);
    return arr;
}
removeElement(array, 5);
console.log(array);

//   Вариант №2:

// const array = [1, 2, 3, 4, 5, 6, 7];
// const x = array.splice(4,5,6,7);
// console.log(array);

//   Вариант №3:

// const array = [1, 2, 3, 4, 5, 6, 7];
// delete array[4];
// console.log(array);