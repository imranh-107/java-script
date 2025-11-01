function arraay(arr){
    let sum=0;
    for (let num of arr){
        if(0>num){
            sum+=num; 
        }
        
    }
    return sum;
}
let avg=arraay([-1,-4,-7,4,6,-10]);
console.log(avg);
