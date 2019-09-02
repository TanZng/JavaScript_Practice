'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    var len = arr.length;
    var neg = 0, pos = 0, zero = 0;
    for (let i = 0; i < len; i++){
        if (arr[i] < 0) {
            neg++;
        }
        else if (arr[i] > 0) {
            pos++;
        }
        else {
            zero++;
        }
    }
    console.log(pos = pos / len);
    console.log(neg = neg / len);
    console.log(zero = zero / len);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
