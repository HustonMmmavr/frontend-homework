'use strict';

function chess(n) { 
    if (!n || n < 2) {
        return null;
    }

    let i = 1;
    console.log(n);
    let chessRow = "";//String.new();
    let inverseRow = "";
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if ((i % 2) == 0) {
            chessRow += '*';
            inverseRow += ' ';
        } else {
            chessRow += ' ';
            inverseRow += '*';
        }
    }

    // let reverseRow = chessRow.split("").reverse().join() + '\n';
    chessRow += '\n';
    inverseRow += '\n';
    let chessBoard = "";
    for (let i = 0; i < n; i++) {
        if ((i % 2) == 0) {
            chessBoard += chessRow;
        } else {
            chessBoard += inverseRow;
        }
    } 
    return chessBoard;
}