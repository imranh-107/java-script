function tex(incomeamount){
    if (incomeamount<=50000){
        return 10;
    }
    else if(incomeamount<= 100000){
        return 20;
    }
     else if (incomeamount<=200000){
        return 30;
    }
    else {
    return 40;
    }
    
}let bet=tex(500000);
console.log(bet);