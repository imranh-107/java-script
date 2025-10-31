function myage(num){
   
    if(num<18){
        return 18;
    }
    else if(num>45){
        return 45;

    }
    return num;
}
let yourage=myage(35);
console.log(yourage);