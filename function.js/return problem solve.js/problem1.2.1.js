function array(arr){
    let num=0;
   
    for(let avg of arr){
        if(avg%2===1){
            num=num+avg;           
        }
    }   
     return num;
}
let sum=array([5,15,8,7]);
console.log(sum);