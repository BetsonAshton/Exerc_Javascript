let a = 5;
let b = 6;
let c = 7;

let semi = (a + b + c) / 2;//semiperimeter
console.log(semi)
let area = Math. sqrt(semi*((semi-a)*(semi-b)*(semi-c)))
console.log(area)