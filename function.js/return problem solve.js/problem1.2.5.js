function number(num){
    if(num<20){
        return num*2;
    }
    else if(num>=20){
        return num/20;
    }
}
let answer=number(40);
console.log(answer);