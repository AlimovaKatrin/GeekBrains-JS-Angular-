// 1. Написать функцию, преобразующую число в объект.
//  Передавая на вход число от 0 до 999, надо получить на выходе объект, 
//  в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
//  Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
//  Если число превышает 999,необходимо выдать соответствующее сообщение с помощью console.log
//   и вернуть пустой объект.

console.log(numberToObjTransfer(2300))
console.log(numberToObjTransfer(230))

function numberToObjTransfer(number) {
    if (number > 999) {
        let obj = Object.create(null);
        return `Вы ввели неверные параметры ${JSON.stringify(obj)}`;
    } else {
        let obj = {
            единицы: parseInt(number.toString()[0]),
            десятки: parseInt(number.toString()[1]),
            сотни: parseInt(number.toString()[2]),
        };
        return obj;
    };
}
// ----------testing variant-----------
let objTheCreator = {
    'единицы': null,
    'десятки': null,
    'сотни': null,
    transfer(number) {
        number.toString()
        this.единицы = number.toString()[0];
        this.десятки = number.toString()[1];
        this.сотни = number.toString()[2];

        console.log(this);
    }
}
objTheCreator.transfer(234)
    // ------------------------------------
