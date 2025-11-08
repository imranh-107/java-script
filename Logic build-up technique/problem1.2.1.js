function noDuplecat(array){
    const arr=[];
    for( let item of array){
        if(arr.includes(item)===false){
            arr.push(item);
        }
    }
    return arr;
}
 let unickarr=noDuplecat([1,5,61,5,87,7,5,81,61]);
 console.log(unickarr);