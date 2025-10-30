function chackarraylenght(arr){
    let arrLenght=arr.length;
    if(arrLenght%2===0){
        return true;
    }
    else{
        return false;
    }

}
let number=chackarraylenght([2,4,6,8,10,12]);
console.log(number);