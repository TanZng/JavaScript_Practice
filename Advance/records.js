'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let arr = scores
    let highest = scores[0];
    let lowest = scores[0]
    let high = 0, low = 0;
    arr = [...new Set(arr)];


    for (let i = 1; i < arr.length; i++){
        if (arr[i] > highest) {
            high++;
            highest = arr[i];
        }
        else if (arr[i] < lowest) {
            low++;
            lowest = arr[i];
        }
    }
    return([high, low]);


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
