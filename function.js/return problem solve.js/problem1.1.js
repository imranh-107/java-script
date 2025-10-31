function chackarraylength(arr){
    let arrLength=arr.length;
    if(arrLength%2===0){
        return true;
    }
    else{
        return false;
    }

}
let number=chackarraylength([2,4,6,8,10,12]);
console.log(number);
