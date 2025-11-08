function priceCalculet({price=10,quantity=1}){
    let totalprice=price*quantity;
    return totalprice;
}
console.log(priceCalculet({price:30,quantity:7}));