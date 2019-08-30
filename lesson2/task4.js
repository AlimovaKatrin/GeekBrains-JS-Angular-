// 4.Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

let a = Math.ceil(Math.random() * (15 - 0));

function loop(number){
    for (let i = number; i < 15; i++) {
        console.log(i);     
    }
}

switch (a) {
    case  0:
        loop(a);
        break;
    case  1:
        loop(a);
        break;
    case  2:
        loop(a);
        break;
    case  3:
        loop(a);
        break;
    case  4:
        loop(a);
        break;
    case  5:
        loop(a);
        break;
    case  6:
        loop(a);
        break;
    case  7:
        loop(a);
        break;
    case  8:
        loop(a);
        break;
    case  9:
        loop(a);
        break;
    case  10:
        loop(a);
        break;
    case  11:
        loop(a);
        break;
    case  12:
        loop(a);
        break;
    case  13:
        loop(a);
        break;
    case  14:
        loop(a);
        break;
    case  15:
        loop(a);
        break;
    default:
        loop(a);
        break;
}