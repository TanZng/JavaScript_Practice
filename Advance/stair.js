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

// Complete the staircase function below.
function staircase(n) {
    let i = 1;
    let hashtag = '#';
    while (i <= n) {
        let j = 0;
        let result = '';
        while (j < n - i) {
            result += ' ';
            j++;
        }
        let k = 0;
        while (k < i) {
            result += '#';
            k++;
        }
        i++;
        console.log(result)
        result = '';
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
