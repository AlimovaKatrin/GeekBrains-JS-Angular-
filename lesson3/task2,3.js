// 2. С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a.Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let bascket1 = new Array(1,1,1,1,1);
let bascket2 = [1234,678,9876,456,87654,234];

function countBasketPrice(arr){
    return arr.reduce((item,nextItem)=> item+nextItem)
}

console.log(countBasketPrice(bascket1));
console.log(countBasketPrice(bascket2));
