// function startFan() {
//     console.log('stand up');
// }
// startFan();

// function bringSingara(money) {
//     console.log('mama singara den: ', money);
// }
// function add(n1, n2) {
//     console.log('mama singara den: ', n1 + n2);
// }

// add(10, 12);
// function add(num1, num2) {
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     return sum;
// }
// total = add(10, 15);
// console.log('total', total);


function getAverage(as1, as2, as3) {
    const total = as1 + as2 + as3;
    const average = total / 3;
    return average;
}

const as1m = 60;
const as2m = 58;
const as3m = 56;
var myAverage = getAverage(as1m, as2m, as3m);
console.log(myAverage);
