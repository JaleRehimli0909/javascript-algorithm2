/*
TASK1
var count = 0;
var S = 0;
for(let i = 1; i <= 1000; i++){
  if(i%5 === 0 && i%7 !== 0){
    S+=i
    count++;
    // console.log(i,'5-e bolunen amma 7-e bolunmeyen ededdir');
    console.log('Number:',i)
}
}
console.log('Sayi:',count);
console.log('Sum:',S);
*/
// Task2

var num1 = Number(prompt("Enter num1.."));
var num2 = Number(prompt("Enter num2.."));
var num3 = Number(prompt("Enter num3.."));

var sum = num1 + num2 + num3;
console.log(num1,'+', num2, '+',num3, '=', sum);
var sqrt = sum*sum;
console.log('Sum-in kvadrati:', sqrt);

