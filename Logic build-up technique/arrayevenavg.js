function even(numbers){
   let evens=[];
    for ( let number of numbers){
        if(number%2===0){
            evens.push(number);
        }
    }
        let sum=0;
        for( let number of evens){
            sum += number;
        }
        const count=evens.length;
        if (evens.length===0){
            return 0;
        }
        const avg=sum/count;
        return avg;

}
let array=[2,5,7,4,22,20,88,27,9];
const arr=even(array);


console.log(arr);