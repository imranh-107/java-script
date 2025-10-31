function avgreturn(num1,num2){
    let sum=num1*num2;
    if (sum>=100){return sum/2;
    }  return sum;
}
let avg=avgreturn(5,10);
console.log(avg);