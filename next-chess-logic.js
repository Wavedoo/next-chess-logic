//NFEN means Next Forsyth–Edwards Notation
//Does not require castling rights since it can castle as long as king is on ONE of the TWO starting positions 
//and the rook is all the way across the board
//So 5 fields instead of 6.
const STANDARD_NFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - 0 1"
var positions = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
var turn = "white";
var en_passant_targets = "-";
var half_moves = 0;
var full_moves = 1;

var board = [];
function beginGame(nfen){
    if(nfen === undefined){
        nfen = STANDARD_NFEN;
    }
    //Monkey man
    //Test 2
}
//123
//final test commit

//Check for win basically?
function gameStatus(half_moves){
    if(half_moves == 100){
        console.log("Game over... you ??!");
    }
}

//piece constructor with type and colour and whatever other data is needed?
class Piece {
    constructor(){

    }
}