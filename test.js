const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test('Un euro son 1.07 dolares',()=>{
    const dolares = fromEuroToDollar(3.5);
    const numEsperado = 3.5*1.07;
    expect(dolares).toBe(numEsperado);
})

test('Un dolar es 156.5 yenes',()=>{
    const yenes = fromDollarToYen(3.5);
    const numEsperado = 3.5*156.5;
    expect(yenes).toBe(numEsperado);
})

test('Un yen es 0.78 pounds',()=>{
    const pounds = fromYenToPound(3.5);
    const numEsperado = 3.5*0.78;
    expect(pounds).toBe(numEsperado);
})