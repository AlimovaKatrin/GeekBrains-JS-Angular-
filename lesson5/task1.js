// 1. Создать функцию, генерирующую шахматную доску. 
// Можно использовать любые html-теги.
//  Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, 
// столбцы — латинскими буквами A, B, C, D, E, F, G, H.



const field = document.getElementById("field");
const border = document.querySelector('.nums');
console.log(border);

let dynamicArr = [0, 1, 0, 1, 0, 1, 0, 1];

for (let index = 1; index <= 8; index++) {
    const square = document.createElement("div");
    square.className = "number";
    square.textContent = [index];
    border.appendChild(square)
}

for (let i = 0; i < 8; i++) {
    dynamicArr.forEach((index) => {

        if (index) {
            const blackSquare = document.createElement("div");
            blackSquare.className = "black square";
            field.appendChild(blackSquare)
        } else {
            const whiteSquare = document.createElement("div");
            whiteSquare.className = "white square";
            field.appendChild(whiteSquare)
        }
    });
    dynamicArr = dynamicArr.map(it => !it);
};



