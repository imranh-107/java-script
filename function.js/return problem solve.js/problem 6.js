function avrage(num,num1,num2){
    let sum=num+num1+num2;
    let avg=sum/3;
    return avg.toFixed(2);
}
const totalavg=avrage(45,54,67);
console.log(totalavg);