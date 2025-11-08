function array(arr= [5,10,15]){
    let newarr=[];
    for (num of arr){
        newarr.push(num*2);

    }
    return newarr;
}
console.log(array([]));