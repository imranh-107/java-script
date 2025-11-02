function timeperhours(hours){
    let minit=hours*60;
    let sec=minit*60;
    return sec;
}
let secend=timeperhours(5);
console.log(secend);