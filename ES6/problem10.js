function TextCalculet({salary=50000,text=10}){
    let avg=(text*salary)/100;
    let totaltext=salary-avg;
    return totaltext;
}
console.log(TextCalculet({ }));