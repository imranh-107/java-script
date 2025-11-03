function OddEven(numbers){
    const odds=[];
    for( let number of numbers){
       
        if (number%2===1){
            odds.push(number);
        }
    }
    let sum=0;
    for(let number of odds){
          sum+=number;
    }
    const count=odds.length;
    if(odds.length===0){
        return 0;
    }
    const avg=sum/count;
    return avg
    

}
const nums=[2];
const avg=OddEven(nums);

console.log(avg);