'use strict';

const fs = require('fs');

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

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let mouse = z;
    let a = 0, b = 0, res="";

    if (mouse > x) {
        a = mouse - x;
    }
    else {
        a = x - mouse;
    }
    if (mouse > y) {
        b = mouse - y;
    }
    else {
        b = y - mouse;
    }

    if (a < b) {
        res = "Cat A";
    }
    else if (a > b) {
        res = "Cat B";
    }
    else {
        res = "Mouse C";
    }
    return(res)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().split(' ');

        const x = parseInt(xyz[0], 10);

        const y = parseInt(xyz[1], 10);

        const z = parseInt(xyz[2], 10);

        let result = catAndMouse(x, y, z);

        ws.write(result + "\n");
    }

    ws.end();
}
