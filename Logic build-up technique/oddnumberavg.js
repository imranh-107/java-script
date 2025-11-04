function oddnumber(array){
    let odds=[];
    for (let number of array){
        if (number%2===1){
            odds.push(number);
        }
    }
    if (odds.length===0){
        return 0;
    }
    let sum=0;
    for(let number of odds){
        sum+=number;
    }
    let count=odds.length;
    let avg=sum/count;
    return avg.toFixed(2);

}
let arr=oddnumber([2,5,9,27,55,7,44,20,99,88]); 
console.log(arr);