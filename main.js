//main.js

console.log('\tproject test_remote_debug, file main.js start')

let squares = [];
let sum = 0;
let sum_squares = 0;

for (let i = 1; i < 6; i++) {
    squares[i] = i * i;
    sum += i;
    sum_squares += squares[i];
    console.log('i = ' + i + ' squares[' + i + '] = ' + squares[i]);
}

console.log('sum = ' + sum + ', sum of squares = ' + sum_squares);

console.log('\tmain.js end');

