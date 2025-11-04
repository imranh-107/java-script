function Oddsnumbrtfound(array){
    for( let number of array ){
        if (number%2===1){
            return "odd number is found";
        }
       
    } 
            return "no odd number found";
        
 }
 const arr=Oddsnumbrtfound([2,4]);
 console.log(arr);