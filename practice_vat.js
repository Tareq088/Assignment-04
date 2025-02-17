function calculateVAT(price){
    let vatRate = 0.075;
    if( price <0 || typeof(price) !== "number"){
        let result = "Invalid";
        return result;
    }
    let totalVat = price*0.075;
    let result = totalVat + " taka";
    return result ;
}
 let price = -999;
 let output = calculateVAT(price)
 console.log(output)

 price = "101";
 output = calculateVAT(price)
 console.log(output)

 price = "foo";
 output = calculateVAT(price)
 console.log(output)

 price = 1500;
 output = calculateVAT(price)
 console.log(output)

 price = 200;
 output = calculateVAT(price)
 console.log(output)

 price = 999;
 output = calculateVAT(price)
 console.log(output)