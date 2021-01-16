function readValue(){
    let userValue = document.getElementById("userAnswer").value;
    return userValue;
}

function numConverter() {
    inputStr = readValue();

    // check entered value to match with only numbers [0-9]
    let isnum = /^\d+$/.test(inputStr);
    
    if (isnum) {
        if(0 < inputStr && inputStr < 999){
            let myObj = {
                "сотни": inputStr[inputStr.length - 3] || "0",
                "десятки": inputStr[inputStr.length - 2] || "0",
                "единицы": inputStr[inputStr.length - 1]                
            }
            console.log(myObj);
        }
        else {
            console.log("Value over limits");
        }
    }
    else {
        console.log("Entered value IS NOT number!");
    }
}
// let userStr = prompt("Enter number between 0 and 999:");
// numConverter(userStr);
