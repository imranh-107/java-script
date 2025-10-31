function NameLength(name1,name2){
    let nam=name1.length;
    let name=name2.length;
    if (nam>name){
        return true;

    }
    else {return false};
}
let big=NameLength('Imran','raj');
let big1=NameLength('Im','raj');
console.log(big);
console.log(big1);