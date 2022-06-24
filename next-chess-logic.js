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

let oldArray = [1, 2, 3, 4, 5];

let newArray = oldArray.slice();

newArray[3] = 12;
console.log(oldArray)
console.log(newArray);


const blankBoard = [[".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."],
                 [".",".",".",".",".",".",".","."]];
// displayBoard(blankBoard);
// console.log(JSON.stringify(blankBoard));

var board = JSON.parse(JSON.stringify(blankBoard));

function beginGame(nfen){
    if(nfen === undefined){
        nfen = STANDARD_NFEN;
    }

    board = JSON.parse(JSON.stringify(blankBoard));

    let fen_array = nfen.split(" ");
    positions = fen_array[0].split('/');
    turn = fen_array[1] == 'w' ? "white" : "black";
    en_passant_targets = fen_array[2];
    half_moves = fen_array[3];
    full_moves = [4];

    console.log(fen_array);
    console.log(positions);

    //TODO: ADD CHECKING BOARD LENGTH = POSITIONS LENGTH OR SOMETHING
    let index = 0;
    let charIndex = 0;
    for(let i = 0; i < positions.length; i++){
        index = 0;
        charIndex = 0;
        while(index < 8){
            if(!isNaN(positions[i][charIndex])){
                index += positions[i][charIndex] - '0';
            }else{
                board[i][index] = positions[i][charIndex];
                index++;
            }
            charIndex++;
        }
    }
    
    displayBoard(board);
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

function displayBoard(gameBoard){
    let line = "";
    for(let i = 0; i < gameBoard.length; i++){
        line = line + (gameBoard.length - i) + " ";
        for(let j = 0; j < gameBoard.length; j++){
            line = line + gameBoard[i][j] + " ";
        }
        console.log(line);
        line = "";
    }
    let hardcodedline = "  a b c d e f g h";
    console.log(hardcodedline);
}
beginGame("r1b1k1nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1 w - 0 1");