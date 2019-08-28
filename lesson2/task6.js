// 6.Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов,
//     operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций
//     (использовать функции из пункта 5) и вернуть полученное значение(применить switch).


function Sum(a, b) {
   return a + b
};

function Minus(a, b) {
   return a - b
};

function Delenie(a, b) {
   return a / b
};

function Ymnoshit(a, b) {
   return a * b;
    
};

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'Sum':
            console.log(Sum(arg1, arg2));
            break;
        case 'Min':
            console.log(Minus(arg1, arg2));
            break;
        case 'Delenie':
            console.log(Delenie(arg1, arg2));
            break;
        case 'Ymnoshit':
            console.log(Ymnoshit(arg1, arg2))
            break;
        default:
            break;
    }
};

mathOperation(1,5,'Sum');
mathOperation(1,5,'Delenie');
mathOperation(1,5,'Ymnoshit');
