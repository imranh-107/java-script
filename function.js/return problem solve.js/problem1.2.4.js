function array(avg){
    let sum=0; 
    for( let num  of avg){
        if(num%4===0){
   sum=sum+num;
        }
     
        
    } return  sum;
   
}
let total=array([2,4,5,7,8,32,45]);
console.log(total);