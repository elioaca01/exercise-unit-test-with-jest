let oneEuroIs = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.78
}
const {JPY,USD,GBP} = oneEuroIs

const fromDollarToYen = function(a){
    return a*JPY;
}

const fromEuroToDollar = function(b){
    return b*USD;
}
const fromYenToPound = function(c){
    return c*GBP;
}



module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound };