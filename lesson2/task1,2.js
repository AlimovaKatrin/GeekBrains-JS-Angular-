// задача1.Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;

c = ++a; alert(c);
// 2 возвращается уже увеличенное число
d = b++; alert(d);
// 1 потому что сначала происходит return потом толь инкрементирование
// например цикл, i сначала встает на ноль а потом только идет на 1
c = (2+ ++a); alert(c);
// 5 значение а тоже двойка, но 2 мы складываем уже с 3
d = (2+ b++); alert(d);
// 4 значение b уже двойка, и он нам ее возвращает,а потом делает из нее тройку                            
alert(a);
// 3 резулат всех наших предидущих манипуляций 
alert(b);
// 3 тоже самое как у "a"

// задача2.Чему будет равен x?
// x равен 5
// 1+(2*2)

var a = 2;
var x = 1 + (a *= 2);

