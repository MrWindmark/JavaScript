document.write('Задание 1', "<br>", "<br>");

let a = 1, b = 1, c = 0, d = 0;
document.write("<br>", "Общая причина - приоретизация действий");

document.write("<br>", "в начале идёт операция сложения, дальше операция присваивания");
c = ++a;
document.write("<br>", "c = ++a; даёт ", c, "<br>");

document.write("в данном случае b++ говорит 'инкрементация в конце всех действий' получается d = b и затем уже b + 1");
d = b++;
document.write("<br>", "d = b++; даёт ", d, "<br>");

document.write("здесь всё наоборот, в начале делаем 1 + а, дальше уже 2 + (1+а)");
c = (2+ ++a);
document.write("<br>", "c = (2+ ++a); даёт ", c, "<br>");
document.write("вновь в начале производим все указанные действия, дальше инкрементируем b");
d = (2+ b++);
document.write("<br>", "d = (2+ b++); даёт ", d, "<br>");

document.write("при этом коннечные значения переменных будут одинаковы");
document.write("<br>", "а = ", a, "<br>");
document.write("b = ", b, "<br>");

document.write("<br>", "Задание 2", "<br>", "<br>");
a = 2;
let x = 1 + (a *= 2);

document.write("согласно приоретизации действий в начале будет выполнена a*= 2, эквивалентная записи a = a * 2. Общий x = 5");

document.write("<br>", "x = 1 + (a *= 2); даёт ", x, "<br>");

document.write("<br><br>", "Задание 3 <br>");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let one = getRandomInt(-50, 50);
let two = getRandomInt(-50, 50);

if (one > 0 && two > 0) {
    document.write('one = ', one, " and two =", two, '<br>');
    document.write(one - two);
}
else if (one < 0 && two < 0) {
    document.write('one = ', one, " and two =", two, '<br>');
    document.write(one * two);
}
else {
    document.write('one = ', one, " and two =", two, '<br>');
    document.write(one + two);
}