// TASK1
var count = 0;
var S = 0;
for(let i = 1; i <= 10; i++){
  if(i%5 === 0 && i%7 !== 0){
    S+=i
    count++;
    // console.log(i,'5-e bolunen amma 7-e bolunmeyen ededdir');
    console.log('Number:',i)
}
}
console.log('Sayi:',count);
console.log('Sum:',S);