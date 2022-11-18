function generaMinMax(min,max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min))
   
   }
function generaArrayNrRandom(quanti,numMin,numMax){
    const ARRAYNUMERI=[];
 while ((ARRAYNUMERI.length) < quanti){
    let nuovoNumero= generaMinMax(numMin,numMax);
     if ( !ARRAYNUMERI.includes(nuovoNumero)){
        ARRAYNUMERI.push(nuovoNumero);
     }
 }
 return ARRAYNUMERI
}
