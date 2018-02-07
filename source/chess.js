'use strict';

function chess(n) { 
    if (!n || n < 2) {
        return null;
    }

    let chessRow = "";
    let inverseRow = "";
    for (let i = 0; i < n; i++) {
        if ((i % 2) == 0) {
            chessRow += '*';
            inverseRow += ' ';
        } else {
            chessRow += ' ';
            inverseRow += '*';
        }
    }

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