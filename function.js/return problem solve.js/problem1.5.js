function number(n){
   let num;
    if(n>0){
        num=n*2;
        return num;
    }
    else if (n<0){
        num=n*3;
        return num;
    }
}
let avg=number(-4);
console.log(avg);