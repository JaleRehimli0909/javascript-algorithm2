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
/*
Task2

var num1 = Number(prompt("Enter num1.."));
var num2 = Number(prompt("Enter num2.."));
var num3 = Number(prompt("Enter num3.."));

var sum = num1 + num2 + num3;
console.log(num1,'+', num2, '+',num3, '=', sum);
var sqrt = sum*sum;
console.log('Sum-in kvadrati:', sqrt);
*/
/*
Task3
var Sum = 0;
for (let i = 40; i >= 4; i--) {
  if (i % 2 === 0) {
    console.log(i);
    Sum += i;
  }
}
console.log(Sum);
*/
/* Task4

for (let number = 100; number < 1000; number++) {
  var a = Math.trunc(number / 100);
  var b = Math.trunc((number - a * 100) / 10);
//   var c = number - a * 100 - b * 10;
  var c = number%10;

  if (a * a * a + b * b * b + c * c * c === number) {
    console.log(number, "This number is Armstrong number..");
  } else {
    console.log(number, "Not an armstrong number");
  }
}
*/
/*
Task5

var say = 0;
var number = Number(prompt("Enter number"));
var sum = 0;
for (let i = 1; i <= number / 2; i++) {
  say++;
  if (!(number % i)) {
    console.log(i);
    sum += i;
  }
}
if (sum === number) {
  console.log(number, "Mukemmel ededdir.");
} else {
  console.log(number, "Mukemmel eded deyil.");
}
console.log(say);
*/
/*
Task6

var num1 = parseFloat(prompt('Enter num1'));
var num2 = parseFloat(prompt('Enter num2'));

num1_mod = num1 % 5;
num2_mod = num2 % 3;

console.log(` ${num1_mod} + ${num2_mod} = ${num1_mod+num2_mod}`);
*/

Task7

var number = Number(prompt('Enter  a 4-digit number..'));
console.log(number);

var newNumber = (7*10000 + number)*10 +8;

console.log(newNumber)

