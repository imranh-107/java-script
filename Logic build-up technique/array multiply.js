function array(numbers){ 
   let odds=[];
   let avg;
   
    for( let number of numbers){
        if(number%2===1){  
            
            odds.push(number*2);
                               
    } 
} return odds;
}

let arr=array([2,5,9,27,55,7,44,20,99,88]); 
console.log(arr);