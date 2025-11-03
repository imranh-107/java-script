function shopbil(weight){
    if (weight<=10){
        return 100;
    }
    else if(weight<=20){
        return 300;
    }
    else if(weight<=50){
        return 1000;
    } 


    else{
        return 1000+(weight-50)*100;
    }
}
/*else{
    let sum=1000;
        for( let i=51;i<=weight;i++){
         sum += 100;      
    } 
    return sum;}} */        

 
let totalbil=shopbil(74);
console.log(totalbil);