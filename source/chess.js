'use strict';

function chess(n) { 
    if (!n || n < 2) {
        return null;
    }

    let halfChessBoxSize = Math.floor(n/2);
    let sharedChessRow = '* '.repeat(halfChessBoxSize + 1);

    let chessRow = sharedChessRow.substr(0,n) + '\n';
    let inverseChessRow = sharedChessRow.substr(1,n) + '\n';

    let chessBoard = (chessRow + inverseChessRow).repeat(halfChessBoxSize); 

    if (n % 2 == 1) {
        chessBoard += chessRow;
    }
    return chessBoard;
}