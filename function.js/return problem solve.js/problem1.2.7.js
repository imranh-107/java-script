function multiplybythree(array){
    let multiply=1;
    for(let num of array){
        if (num%3===0){
            multiply*=num;
        }
    }return multiply;
}
let totalmultiply=multiplybythree([3,6,9,13,12,27]);
console.log(totalmultiply);