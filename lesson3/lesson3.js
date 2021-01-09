let numLine = []
for (let i = 2; i <= 100; i++){
    numLine.push(true);
}

let i = 2;
let resultNumLine = [];
while(i < 100) {
    if (numLine[i]){
        for (let j = i*i; j < 100; j += i){
            numLine[j] = false;
        }
        document.write(i, " ");
    }
    i++;
}

document.write("<br><br>Task 4:<br>");

for (let i = 0; i < 10; i++) document.write(i+1 + " ");

document.write("<br><br>Task 5 watch in console<br>");
let step = 0;
resultString = "*";
do {
    console.log(resultString);
    resultString += "*";
    step++;
}while (step < 20);