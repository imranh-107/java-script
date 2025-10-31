function number(num){
    let multiply;
    if(num>=10){
        multiply=num/10;
        return multiply;
    }
     else{
        multiply=num*10;
        return multiply;
    }
}
let answer=number(68);
console.log(answer);