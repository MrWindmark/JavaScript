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