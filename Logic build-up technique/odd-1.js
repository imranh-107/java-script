function oddnumber(array){
    let odds=[];
    for (number of array){
        if (number%2===1){
            odds.push(number-1);
        }
    }return odds;
}
let arr=oddnumber([2,5,9,27,55,7,44,20,99,88]);
console.log(arr);