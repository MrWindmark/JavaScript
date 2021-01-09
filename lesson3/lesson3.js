i = 0;
while(i < 100) {
    if (i == 99)
    {
        document.write(i+1);    
        break;
    }
    else{
        document.write(i+1, ", ");
        i++;
    }
}

for (i = 0; i < 10; i++) alert(i+1);

i = 0;
resultString = "*";
do {
    console.log(resultString);
    resultString += "*";
    i++;
}while (i < 20);