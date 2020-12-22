let tempCelsius0 = 0;
let tempCelsius = 36.6;
let tempCelsius2 = 100;
let tempCelsius3 = 2048;

let tempPharenheit0 = (9 / 5) * tempCelsius0 + 32;
document.write(tempCelsius0, " по Цельсию = ", tempPharenheit0, " по Фаренгейту<br \/>");
let tempPharenheit = (9 / 5) * tempCelsius + 32;
document.write(tempCelsius, " по Цельсию = ", tempPharenheit, " по Фаренгейту<br \/>");
let tempPharenheit2 = (9 / 5) * tempCelsius2 + 32;
document.write(tempCelsius2, " по Цельсию = ", tempPharenheit2, " по Фаренгейту<br \/>");
let tempPharenheit3 = (9 / 5) * tempCelsius2 + 32;
document.write(tempCelsius3, " по Цельсию = ", tempPharenheit3, " по Фаренгейту<br \/>");

document.write("<br />");
document.write("Задание 2<br />");
let first = 1;
let second = "two";
let three = 3.4;
document.write("first = ", first, "<br />", "second = ", second, "<br />", "third = ", three, "<br />");
document.write("first + second: ", first + second,"<br />");
document.write("first * second: ", first * second,"<br />");
document.write("second * three: ", second * three,"<br />");
document.write("first / three: ", first / three,"<br />");
document.write("<br />");

let username = "Василий";
document.write("username: ", username, "<br />");
let admin = "";
document.write("admin до присвоения: ", admin, "<br />");
admin = username;
document.write("admin равный username: ", admin, "<br />");

document.write("<br /><br />Task 3. Чему будет равно JS-выражение 1000 + \"108\"<br />");
let task3_solv = 1000 + "108";
document.write(task3_solv, " - неявное приведение типов. Оба объекта стали строками<br /><br />");


